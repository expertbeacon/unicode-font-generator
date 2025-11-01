"use client";

import { GradientSection } from "@/components/ui/gradient-background";
import { TrendingUp, Sparkles, Award, Lightbulb } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  tag: string;
  gradient: "orange-red" | "blue-purple" | "green-emerald" | "purple-pink";
}

const gradientClasses = {
  "orange-red": "from-gradient-orange to-gradient-red",
  "blue-purple": "from-gradient-blue to-gradient-purple",
  "green-emerald": "from-gradient-green to-gradient-emerald",
  "purple-pink": "from-gradient-purple to-gradient-pink",
};

const tagColors = {
  "orange-red": "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-300 dark:border-red-800",
  "blue-purple": "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-800",
  "green-emerald": "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-300 dark:border-green-800",
  "purple-pink": "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800",
};

function BenefitCard({ icon: Icon, title, description, tag, gradient }: BenefitCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-gradient-blue dark:hover:border-gradient-blue transition-all duration-300 hover:shadow-lg">
      <div className="absolute top-4 right-4">
        <span className={cn(
          "text-xs font-bold px-3 py-1 rounded-full border",
          tagColors[gradient]
        )}>
          {tag}
        </span>
      </div>

      <div className="flex items-start gap-4">
        <div className={cn(
          "w-12 h-12 rounded-xl text-white flex items-center justify-center shadow-lg shrink-0",
          "group-hover:scale-110 transition-transform duration-300",
          `bg-gradient-to-br ${gradientClasses[gradient]}`
        )}>
          <Icon className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function BenefitsSection() {
  const t = useTranslations("frontend.home.benefits");

  return (
    <GradientSection variant="orange-pink" className="mb-16 px-4">
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-3">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BenefitCard
            icon={TrendingUp}
            title={t("visibility.title")}
            description={t("visibility.description")}
            tag={t("visibility.tag")}
            gradient="orange-red"
          />
          <BenefitCard
            icon={Sparkles}
            title={t("expression.title")}
            description={t("expression.description")}
            tag={t("expression.tag")}
            gradient="purple-pink"
          />
          <BenefitCard
            icon={Award}
            title={t("professional.title")}
            description={t("professional.description")}
            tag={t("professional.tag")}
            gradient="blue-purple"
          />
          <BenefitCard
            icon={Lightbulb}
            title={t("creative.title")}
            description={t("creative.description")}
            tag={t("creative.tag")}
            gradient="green-emerald"
          />
        </div>
      </div>
    </GradientSection>
  );
}
