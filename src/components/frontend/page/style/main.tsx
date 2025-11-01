"use client";

import { Markdown } from "@/components/shared/markdown";
import { Textarea } from "@/components/ui/textarea";
import { alternatingFontKeys } from "@/fonts";
import { cn } from "@/lib/utils";
import { styleFonts, StyleKey } from "@/slugs";
import { FontKey, fontKeys } from "@/transforms";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Fonts } from "./fonts";
import { EnhancedFonts } from "./enhanced-fonts";
import { Sidebar } from "./sidebar";

export function StyleMain({
  markdownContents,
  style = "all",
  text,
}: Readonly<{  
  markdownContents: Record<string, string | undefined>;
  style: StyleKey;
  text?: string | null;
}>) {
  const { block1, block2 } = markdownContents; 
  const [content, setContent] = useState<string>(text ? text : "Hello my old friend"); 
  const pathname = usePathname();  
  const router = useRouter();  

  const onChange=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setContent(e.target.value);
    router.replace(`${pathname}?text=${encodeURIComponent(e.target.value)}`);
  }

  const allFonts: FontKey[] = [];
  fontKeys.map(item => allFonts.push(item) )
  alternatingFontKeys.map(item => allFonts.push(item) )
  const currentFonts = style === "all" ? allFonts as readonly FontKey[] : styleFonts[style];

  return (
    <div className={cn("w-full leading-9 text-base")}> 
      {block1 && <Markdown className="mb-8" classNames={{
        h1: "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-5",
        h2: "scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight mt-5 text-primary",
        p: "text-sm",
        blockquote: "mb-6 mt-0 border-l-2 pl-6 italic"
      }} content={block1} />}   
      <div className="relative">
        <Textarea
          defaultValue={content}
          className="rounded-2xl h-32 text-xl p-5 border-2 border-gray-200 dark:border-gray-800 focus:border-gradient-blue dark:focus:border-gradient-blue transition-all duration-300"
          onChange={(e) => onChange(e)}
          placeholder="Type your text here to see amazing font transformations..."
        />
        {content && (
          <div className="absolute top-2 right-2 text-xs text-muted-foreground">
            {content.length} characters
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row py-10 gap-10">
        <div className="md:w-[200px] flex-shrink-0">
          <Sidebar />
        </div>
        <div className="w-full rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-8 py-8 border-2 border-gray-200/50 dark:border-gray-800/50 shadow-xl">
          {content ? (
            <EnhancedFonts currentFonts={currentFonts} className="mb-10" content={content} style={style} />
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              <div className="text-6xl mb-4">✍️</div>
              <p className="text-lg mb-2">Start typing to see amazing font transformations!</p>
              <p className="text-sm">Enter any text above and watch it transform into beautiful styled fonts.</p>
            </div>
          )}
          {block2 && <Markdown content={block2} className="mt-10" />}
        </div>
      </div>
    </div>
  );
}
