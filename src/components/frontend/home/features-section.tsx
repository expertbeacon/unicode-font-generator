"use client";

import { FeatureCard, FeatureGrid } from "@/components/ui/feature-card";
import { GradientSection } from "@/components/ui/gradient-background";
import { Zap, Type, Palette, Copy, Heart, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export function FeaturesSection() {
  const t = useTranslations("frontend.home.features");

  return (
    <GradientSection variant="blue-purple" className="mb-16 px-4">
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-3">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <FeatureGrid columns={3}>
          <FeatureCard
            icon={Zap}
            title={t("instant.title")}
            description={t("instant.description")}
            gradient="blue-purple"
          />
          <FeatureCard
            icon={Type}
            title={t("unicode.title")}
            description={t("unicode.description")}
            gradient="purple-pink"
          />
          <FeatureCard
            icon={Palette}
            title={t("variety.title")}
            description={t("variety.description")}
            gradient="blue-purple"
          />
          <FeatureCard
            icon={Copy}
            title={t("copy.title")}
            description={t("copy.description")}
            gradient="purple-pink"
          />
          <FeatureCard
            icon={Heart}
            title={t("free.title")}
            description={t("free.description")}
            gradient="green-emerald"
          />
          <FeatureCard
            icon={Globe}
            title={t("compatible.title")}
            description={t("compatible.description")}
            gradient="cyan-blue"
          />
        </FeatureGrid>
      </div>
    </GradientSection>
  );
}
