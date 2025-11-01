"use client";
import Copy from "@/components/shared/copy";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/config";
import { AlternatingFontKey, alternatingFonts } from "@/fonts";
import { addDoubleUnderline, addStrikethrough, addUnderline, addWavyUnderline } from "@/lib/utils";
import { StyleKey } from "@/slugs";
import { FontKey, fonts, transforms } from "@/transforms";
import { HTMLAttributes, useState } from "react";

type TransformMap = { [key: string]: string };

export const EnhancedFonts = ({
  className,
  content,
  currentFonts,
  style
}: {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  currentFonts: Readonly<FontKey[]>;
  content: string;
  style: StyleKey
}) => {

  const [underline, setUnderline] = useState(false);
  const [strikethrough, setStrikethrough] = useState(false);
  const [doubleUnderline, setDoubleUnderline] = useState(false);
  const [wavyUnderline, setWavyUnderline] = useState(false);
  const [copiedFonts, setCopiedFonts] = useState<Set<string>>(new Set());

  const handleCopy = (fontKey: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFonts(prev => new Set(prev).add(fontKey));
    setTimeout(() => {
      setCopiedFonts(prev => {
        const newSet = new Set(prev);
        newSet.delete(fontKey);
        return newSet;
      });
    }, 2000);
  };

  const getSocialButtons = (text: string) => {
    return (
      <div className="flex items-center gap-2">
        <Button
          className="h-8 rounded-lg bg-gradient-to-r from-gradient-blue to-gradient-purple hover:from-gradient-blue hover:to-gradient-purple text-white"
          size="sm"
          onClick={() => handleCopy('twitter', text)}
        >
          {copiedFonts.has('twitter') ? '✓ Copied!' : '📱 Twitter'}
        </Button>
        <Button
          className="h-8 rounded-lg bg-gradient-to-r from-gradient-purple to-gradient-pink hover:from-gradient-purple hover:to-gradient-pink text-white"
          size="sm"
          onClick={() => handleCopy('instagram', text)}
        >
          {copiedFonts.has('instagram') ? '✓ Copied!' : '📷 Instagram'}
        </Button>
        <Button
          className="h-8 rounded-lg bg-gradient-to-r from-gradient-pink to-gradient-red hover:from-gradient-pink hover:to-gradient-red text-white"
          size="sm"
          onClick={() => handleCopy('tiktok', text)}
        >
          {copiedFonts.has('tiktok') ? '✓ Copied!' : '🎵 TikTok'}
        </Button>
      </div>
    );
  };

  const FontItem = ({ fontKey }: { fontKey: FontKey }) => {
    const transformAndAdjust = (text: string) => {

      return Array.from(text).map((char,idx) => {
        const alternatingIdx = idx % 2; // index 0 or 1
        const alternatings = alternatingFonts;
        const chars = fontKey.includes("alternating") ? transforms[(alternatings[fontKey as AlternatingFontKey][alternatingIdx]) as FontKey] as TransformMap : transforms[fontKey] as TransformMap;

        let newChar = chars[char] || char;

        if(style === "underline"){
          if(underline) newChar = addUnderline({char: newChar, fontKey});
          if(strikethrough) newChar = addStrikethrough({char: newChar, fontKey});
          if(doubleUnderline) newChar = addDoubleUnderline({char: newChar, oldChar: char, fontKey});
          if(wavyUnderline) newChar = addWavyUnderline({char: newChar, oldChar: char, fontKey});
        }
        return newChar;
      }).join('');
    };

    const transformedContent = transformAndAdjust(content);

    return (
      <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-800 leading-7 flex flex-col lg:flex-row lg:items-center justify-start gap-5 group hover:bg-gray-50 dark:hover:bg-gray-900/50 rounded-lg p-4 transition-all duration-300">
        <div className="text-muted-foreground text-xs md:w-[200px] lg:w-[300px] font-medium group-hover:text-primary transition-colors duration-300">
          {fonts[fontKey]}
        </div>
        <div className="relative flex flex-col lg:flex-row lg:justify-between w-full lg:items-center gap-4">
          <div className="text-lg font-mono bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700 flex-1 min-h-[50px] flex items-center">
            {transformedContent || <span className="text-muted-foreground">Type something to see the transformation...</span>}
          </div>
          <div className="flex items-center gap-3">
            <Copy className="text-sm h-10 px-4 rounded-lg bg-gradient-to-r from-gradient-blue to-gradient-purple hover:from-gradient-blue hover:to-gradient-purple text-white transition-all duration-300 hover:scale-105">{transformedContent}</Copy>
            {getSocialButtons(transformedContent)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={className}>
      {style === "underline" && (
        <div className="flex pb-6 mb-8 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gradient-blue/5 to-gradient-purple/5 rounded-xl p-4">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-semibold text-muted-foreground mr-2">Text Effects:</span>
            <Button
              aria-label="Underline"
              size="icon"
              data-underline={underline}
              variant="outline"
              onClick={() => setUnderline(!underline)}
              className="data-[underline='true']:font-extrabold data-[underline='true']:bg-primary/25 underline underline-offset-3 rounded-lg dark:border-white/10 hover:bg-primary/10 transition-all duration-200"
            >
              {"U"}
            </Button>
            <Button
              aria-label="Double Underline"
              size="icon"
              data-double-underline={doubleUnderline}
              variant="outline"
              onClick={() => setDoubleUnderline(!doubleUnderline)}
              className="data-[double-underline='true']:font-extrabold data-[double-underline='true']:bg-primary/25 rounded-lg dark:border-white/10 hover:bg-primary/10 transition-all duration-200"
            >
              {"U" + '\u0333'}
            </Button>
            <Button
              aria-label="Wavy Underline"
              size="icon"
              data-wavy-underline={wavyUnderline}
              variant="outline"
              onClick={() => setWavyUnderline(!wavyUnderline)}
              className="data-[wavy-underline='true']:font-extrabold data-[wavy-underline='true']:bg-primary/25 rounded-lg dark:border-white/10 hover:bg-primary/10 transition-all duration-200"
            >
              {"U" + '\u0330'}
            </Button>
            <Button
              aria-label="Strikethrough"
              size="icon"
              data-strikethrough={strikethrough}
              variant="outline"
              onClick={() => setStrikethrough(!strikethrough)}
              className="data-[strikethrough='true']:font-extrabold data-[strikethrough='true']:bg-primary/25 rounded-lg dark:border-white/10 hover:bg-primary/10 transition-all duration-200"
            >
              {"U" + '\u0336'}
            </Button>
          </div>
        </div>
      )}

      {currentFonts.length > 0 ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Generated Fonts</h3>
            <span className="text-sm text-muted-foreground">
              {currentFonts.length} styles available
            </span>
          </div>
          {currentFonts.map(key => <FontItem key={key} fontKey={key} />)}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <div className="text-6xl mb-4">🎨</div>
          <p className="text-lg">No fonts available for this style</p>
          <p className="text-sm mt-2">Try selecting a different style from the menu</p>
        </div>
      )}
    </div>
  );
};