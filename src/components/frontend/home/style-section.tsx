"use client";

import { GradientSection } from "@/components/ui/gradient-background";
import { getStyleName } from "@/metadata";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface StyleSectionProps {
  style: string;
}

export function StyleSection({ style }: StyleSectionProps) {
  const [styleName, setStyleName] = useState<string>("");
  const [styleDescription, setStyleDescription] = useState<string>("");
  const t = useTranslations("frontend.style");

  useEffect(() => {
    // Get style name from translations
    const styleKey = style.replace("-text", "").replace("-font", "");
    const name = t(`${styleKey}.name` as any) || styleKey.charAt(0).toUpperCase() + styleKey.slice(1);
    const description = t(`${styleKey}.meta.description` as any) || "";

    setStyleName(name);
    setStyleDescription(description);
  }, [style, t]);

  const getStyleGradient = (styleType: string) => {
    const gradients: Record<string, string> = {
      "bold": "blue-purple",
      "italic": "purple-pink",
      "fancy": "orange-red",
      "cool": "cyan-blue",
      "small": "green-emerald",
      "underline": "purple-pink",
      "bubble": "blue-purple",
      "square": "orange-red",
      "serif": "cyan-blue",
      "sans-serif": "green-emerald",
      "cursive": "purple-pink"
    };
    return gradients[styleType] || "blue-purple";
  };

  const getUseCases = (styleType: string) => {
    const useCases: Record<string, string[]> = {
      "bold": [
        "Facebook posts and updates",
        "Twitter headlines",
        "Instagram captions",
        "YouTube video titles"
      ],
      "italic": [
        "Poetry and quotes",
        "Book titles",
        "Creative writing",
        "Elegant signatures"
      ],
      "fancy": [
        "Social media bios",
        "Wedding invitations",
        "Art projects",
        "Creative branding"
      ],
      "cool": [
        "Gaming usernames",
        "Social media posts",
        "Personal websites",
        "Creative projects"
      ],
      "small": [
        "Social media comments",
        "Side notes",
        "Subtle emphasis",
        "Compact text"
      ],
      "underline": [
        "Important announcements",
        "Navigation elements",
        "Call-to-action text",
        "Emphasis markers"
      ]
    };
    return useCases[styleType] || [
      "Social media posts",
      "Creative projects",
      "Personal messages",
      "Digital signatures"
    ];
  };

  const gradient = getStyleGradient(style);
  const useCases = getUseCases(style);

  return (
    <div className="text-center mb-16">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-pink mb-4">
          {styleName} Font Generator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Create stunning {styleName.toLowerCase()} text in seconds. Perfect for making your content stand out on social media, websites, and creative projects.
        </p>
      </div>

      {/* Style Description */}
      <GradientSection variant={gradient as any}>
        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
          <div className="text-left mb-8">
            <h2 className="text-2xl font-bold mb-4">About {styleName} Text</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {styleDescription}
            </p>
          </div>

          {/* Use Cases */}
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4">Perfect For:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-4 flex items-center gap-3"
                >
                  <span className="text-2xl">✨</span>
                  <span className="text-muted-foreground">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-8 text-left">
            <h3 className="text-xl font-bold mb-4">Tips for Best Results</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="text-gradient-blue dark:text-gradient-blue text-xl">•</span>
                <span>Use short phrases for maximum impact</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gradient-purple dark:text-gradient-purple text-xl">•</span>
                <span>Perfect for social media bios and captions</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gradient-pink dark:text-gradient-pink text-xl">•</span>
                <span>Works on all major platforms (Facebook, Instagram, Twitter, etc.)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gradient-orange dark:text-gradient-orange text-xl">•</span>
                <span>Copy and paste anywhere - no special apps needed</span>
              </div>
            </div>
          </div>
        </div>
      </GradientSection>
    </div>
  );
}