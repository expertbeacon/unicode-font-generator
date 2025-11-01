"use client";

import { useState } from "react";
import { Link } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Copy from "@/components/shared/copy";
import { styleFonts, styleKeys, StyleKey } from "@/slugs";
import { fonts, FontKey, transforms } from "@/transforms";
import { cn } from "@/lib/utils";
import { Search, ArrowRight, Filter } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type TransformMap = { [key: string]: string };

export function GalleryMain({ text }: { text?: string | null }) {
  const [content, setContent] = useState<string>(text || "Hello World");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const pathname = usePathname();
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    router.replace(`${pathname}?text=${e.target.value}`);
  };

  // Get all unique fonts across all styles
  const getAllFonts = (): FontKey[] => {
    const fontSet = new Set<FontKey>();
    Object.values(styleFonts).forEach(styleFontArray => {
      styleFontArray.forEach(font => fontSet.add(font));
    });
    return Array.from(fontSet);
  };

  const allFonts = getAllFonts();

  // Filter fonts based on search and category
  const filteredFonts = allFonts.filter(fontKey => {
    const fontName = fonts[fontKey].toLowerCase();
    const matchesSearch = fontName.includes(searchQuery.toLowerCase()) || fontKey.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedCategory === "all") return matchesSearch;

    const categoryFonts = styleFonts[selectedCategory as StyleKey];
    return matchesSearch && categoryFonts.includes(fontKey);
  });

  const transformText = (fontKey: FontKey, text: string): string => {
    return Array.from(text).map((char) => {
      const chars = transforms[fontKey] as TransformMap;
      return chars[char] || char;
    }).join('');
  };

  const categories = ["all", ...styleKeys.filter(key => key !== "all")];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Text Input */}
      <div className="mb-8 space-y-4">
        <Textarea
          defaultValue={content}
          className="rounded-xl h-32 text-xl p-5 border-2 focus:border-primary transition-colors"
          onChange={onChange}
          placeholder="Type your text here..."
        />

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search font styles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-xl border-2"
            />
          </div>

          <div className="relative md:w-64">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-12 pl-10 pr-4 rounded-xl border-2 bg-background appearance-none cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredFonts.length} of {allFonts.length} font styles
        </div>
      </div>

      {/* Font Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredFonts.map((fontKey) => {
          const transformedContent = transformText(fontKey, content);
          const fontName = fonts[fontKey];

          return (
            <div
              key={fontKey}
              className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                {/* Font Name & Category Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {fontName}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {fontKey}
                    </p>
                  </div>

                  {/* Find which category this font belongs to */}
                  {Object.entries(styleFonts).find(([_, fontArray]) =>
                    fontArray.includes(fontKey) && _ !== "all"
                  )?.[0] && (
                    <Link
                      href={`/${Object.entries(styleFonts).find(([_, fontArray]) =>
                        fontArray.includes(fontKey) && _ !== "all"
                      )?.[0]}`}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {Object.entries(styleFonts).find(([_, fontArray]) =>
                        fontArray.includes(fontKey) && _ !== "all"
                      )?.[0].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </Link>
                  )}
                </div>

                {/* Transformed Text Preview */}
                <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 min-h-[80px] flex items-center">
                  <div className="text-2xl md:text-3xl font-bold break-all">
                    {transformedContent}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Copy className="flex-1">{transformedContent}</Copy>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10"
                    asChild
                  >
                    <a
                      target="_blank"
                      href={`https://x.com/intent/post?text=${encodeURIComponent(transformedContent)}`}
                    >
                      𝕏
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* No Results */}
      {filteredFonts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold mb-2">No fonts found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search or filter criteria
          </p>
          <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
            Clear Filters
          </Button>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
        <h3 className="text-2xl font-bold mb-2">
          Looking for something specific?
        </h3>
        <p className="text-muted-foreground mb-6">
          Browse by categories to find the perfect font style for your needs
        </p>
        <Link href="/">
          <Button size="lg" className="group">
            Browse Categories
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
