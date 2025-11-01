import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
}

export function HeroSection({ children, className }: HeroSectionProps) {
  return (
    <div className={cn("text-center py-16 px-4 space-y-8", className)}>
      {children}
    </div>
  );
}

interface HeroIconProps {
  children: ReactNode;
  gradient?: "blue-purple" | "purple-pink" | "orange-pink" | "cyan-blue";
  className?: string;
}

const gradientClasses = {
  "blue-purple": "from-gradient-blue via-gradient-purple to-gradient-pink",
  "purple-pink": "from-gradient-purple via-gradient-pink to-gradient-red",
  "orange-pink": "from-gradient-orange via-gradient-red to-gradient-pink",
  "cyan-blue": "from-cyan-500 via-blue-500 to-indigo-500",
};

export function HeroIcon({ children, gradient = "blue-purple", className }: HeroIconProps) {
  return (
    <div className="relative inline-block">
      <div className={cn(
        "absolute inset-0 rounded-3xl blur-xl opacity-50 animate-pulse-slow",
        `bg-gradient-to-r ${gradientClasses[gradient]}`
      )} />
      <div className={cn(
        "relative inline-flex items-center justify-center w-20 h-20 rounded-3xl text-white shadow-2xl",
        `bg-gradient-to-br ${gradientClasses[gradient]}`,
        className
      )}>
        {children}
      </div>
    </div>
  );
}

interface HeroTitleProps {
  children: ReactNode;
  gradient?: boolean;
  className?: string;
}

export function HeroTitle({ children, gradient = true, className }: HeroTitleProps) {
  return (
    <h1 className={cn(
      "text-5xl md:text-7xl font-black",
      gradient && "bg-clip-text text-transparent bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-pink dark:from-gradient-blue dark:via-gradient-purple dark:to-gradient-pink",
      !gradient && "text-foreground",
      className
    )}>
      {children}
    </h1>
  );
}

interface HeroSubtitleProps {
  children: ReactNode;
  className?: string;
}

export function HeroSubtitle({ children, className }: HeroSubtitleProps) {
  return (
    <p className={cn(
      "text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium",
      className
    )}>
      {children}
    </p>
  );
}

interface HeroStatsProps {
  stat: string;
  description: string;
}

export function HeroStats({ stat, description }: HeroStatsProps) {
  return (
    <div className="inline-block bg-gradient-to-r from-gradient-blue/10 to-gradient-purple/10 dark:from-gradient-blue/20 dark:to-gradient-purple/20 border-2 border-gradient-blue dark:border-gradient-blue rounded-2xl p-8">
      <p className="text-lg font-semibold mb-2">
        <span className="text-2xl">✨</span> {stat}
      </p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
