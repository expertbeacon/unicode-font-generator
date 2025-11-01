"use client";

import { GradientSection } from "@/components/ui/gradient-background";
import { ExternalLink, ArrowRight, RefreshCw, Image, Link2, Code, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  name: string;
  description: string;
  url: string;
  icon: React.ComponentType<any>;
  gradient: "blue-cyan" | "purple-pink" | "orange-red" | "green-emerald" | "cyan-blue";
}

const gradientClasses = {
  "blue-cyan": "from-gradient-blue to-gradient-cyan",
  "purple-pink": "from-gradient-purple to-gradient-pink",
  "orange-red": "from-gradient-orange to-gradient-red",
  "green-emerald": "from-gradient-green to-gradient-emerald",
  "cyan-blue": "from-gradient-cyan to-gradient-blue",
};

function ToolCard({ name, description, url, icon: Icon, gradient }: ToolCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-gradient-blue dark:hover:border-gradient-blue transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
        style={{ backgroundImage: "linear-gradient(135deg, var(--tw-gradient-stops))" }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <div className={cn(
            "w-12 h-12 rounded-xl text-white flex items-center justify-center shadow-lg",
            "group-hover:scale-110 transition-transform duration-300",
            `bg-gradient-to-br ${gradientClasses[gradient]}`
          )}>
            <Icon className="w-6 h-6" />
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <h3 className="font-bold text-lg mb-2 group-hover:text-gradient-blue dark:group-hover:text-gradient-blue transition-colors duration-300">
          {name}
        </h3>

        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </a>
  );
}

export function ToolsGrid() {
  const t = useTranslations("frontend.home.tools");

  const tools = [
    {
      name: "SERP Checking",
      description: "Check search engine ranking positions",
      url: "https://www.serpchecking.com/",
      icon: ArrowRight,
      gradient: "blue-cyan" as const,
    },
    {
      name: "Is It Down Or Just Me",
      description: "Check if website is down globally",
      url: "https://isitdownorjustme.net/",
      icon: RefreshCw,
      gradient: "purple-pink" as const,
    },
    {
      name: "Redirect Checker",
      description: "Analyze URL redirect chains and SEO",
      url: "https://www.redirectchecker.org/",
      icon: ArrowRight,
      gradient: "green-emerald" as const,
    },
    {
      name: "Logo Generator",
      description: "Generate custom logos online",
      url: "https://porn-logo.com/onlyfans",
      icon: Image,
      gradient: "orange-red" as const,
    },
    {
      name: "Username Generator",
      description: "Generate unique usernames instantly",
      url: "https://usernamesearch.io/tools/username-generator",
      icon: Wrench,
      gradient: "cyan-blue" as const,
    },
    {
      name: "Favicon Extractor",
      description: "Extract favicon from any website",
      url: "https://www.faviconextractor.com/",
      icon: Image,
      gradient: "blue-cyan" as const,
    },
    {
      name: "Favicon Generator",
      description: "Generate favicons for all platforms",
      url: "https://www.favicongenerator.io/",
      icon: RefreshCw,
      gradient: "purple-pink" as const,
    },
    {
      name: "HTML to Markdown",
      description: "Convert HTML to Markdown format",
      url: "https://www.htmltomarkdown.io/",
      icon: Code,
      gradient: "green-emerald" as const,
    },
    {
      name: "Font Generator",
      description: "Generate stylish Unicode fonts",
      url: "https://www.fontgenerator.dev/",
      icon: Link2,
      gradient: "orange-red" as const,
    },
  ];

  return (
    <GradientSection variant="purple-pink" className="mb-16 px-4">
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-gray-800/50 p-8 md:p-12 shadow-xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gradient-orange to-gradient-pink text-white mb-4 shadow-lg">
            <Wrench className="w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-2">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </GradientSection>
  );
}
