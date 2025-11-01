"use client";

import { Link } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Palette, Calculator, Book, Gamepad2, Diamond } from "lucide-react";
import { useTranslations } from "next-intl";

interface PopularFontCard {
  slug: string;
  icon: React.ReactNode;
  gradient: string;
  example: string;
}

export function PopularFontsSection() {
  const t = useTranslations('frontend.home.popular');

  const popularFonts: PopularFontCard[] = [
    {
      slug: "fancy",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      example: "𝒞𝓊𝓇𝓈𝒾𝓋ℯ 𝒮𝓉𝓎𝓁ℯ"
    },
    {
      slug: "artistic",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      example: "🄰🅁🅃🄸🅂🅃🄸🄲"
    },
    {
      slug: "mathematical",
      icon: <Calculator className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      example: "𝕄𝕒𝕥𝕙 𝔽𝕠𝕟𝕥"
    },
    {
      slug: "vintage",
      icon: <Book className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-500",
      example: "𝔙𝔦𝔫𝔱𝔞𝔤𝔢"
    },
    {
      slug: "gaming",
      icon: <Gamepad2 className="w-6 h-6" />,
      gradient: "from-red-500 to-rose-500",
      example: "🅶🅰🅼🅸🅽🅶"
    },
    {
      slug: "elegant",
      icon: <Diamond className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      example: "ℰ𝓁ℯ𝓰𝒶𝓃𝓉"
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary">{t('badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Font Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {popularFonts.map((font) => (
            <Link
              key={font.slug}
              href={`/${font.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${font.gradient} text-white mb-4`}>
                  {font.icon}
                </div>

                {/* Font Name */}
                <h3 className="text-xl font-bold mb-2 capitalize">
                  {font.slug.replace('-', ' ')}
                </h3>

                {/* Example Text */}
                <div className="text-2xl font-bold mb-4 h-12 flex items-center">
                  {font.example}
                </div>

                {/* CTA */}
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                  {t('try_now')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${font.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/fonts-gallery">
            <Button size="lg" className="group">
              {t('explore_all')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
