"use client";

import { GradientSection } from "@/components/ui/gradient-background";
import { Edit3, MousePointer2, Clipboard } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface HowToStepProps {
  number: number;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

function HowToStep({ number, icon: Icon, title, description }: HowToStepProps) {
  return (
    <div className="relative group">
      {/* Connector line for larger screens */}
      {number < 3 && (
        <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-gradient-blue to-gradient-purple opacity-30 -translate-y-1/2" />
      )}

      <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-gradient-blue dark:hover:border-gradient-blue transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-white flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8" />
          </div>

          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-gradient-blue to-gradient-purple text-white flex items-center justify-center font-bold shadow-lg">
            {number}
          </div>

          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HowToSection() {
  const t = useTranslations("frontend.home.howto");

  return (
    <GradientSection variant="purple-pink" className="mb-16 px-4">
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-3">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <HowToStep
            number={1}
            icon={Edit3}
            title={t("step1.title")}
            description={t("step1.description")}
          />
          <HowToStep
            number={2}
            icon={MousePointer2}
            title={t("step2.title")}
            description={t("step2.description")}
          />
          <HowToStep
            number={3}
            icon={Clipboard}
            title={t("step3.title")}
            description={t("step3.description")}
          />
        </div>
      </div>
    </GradientSection>
  );
}
