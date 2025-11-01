import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
  variant?: "blue-purple" | "purple-pink" | "orange-pink" | "cyan-blue" | "multi";
  className?: string;
}

export function GradientBackground({
  children,
  variant = "multi",
  className
}: GradientBackgroundProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Fixed gradient background orbs */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {variant === "multi" && (
          <>
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-blue/20 dark:bg-gradient-blue/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-purple/20 dark:bg-gradient-purple/10 rounded-full blur-3xl animate-pulse-slow"
                 style={{animationDelay: "1s"}} />
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-pink/20 dark:bg-gradient-pink/10 rounded-full blur-3xl animate-pulse-slow"
                 style={{animationDelay: "2s"}} />
          </>
        )}
        {variant === "blue-purple" && (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-blue/20 dark:bg-gradient-blue/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-purple/20 dark:bg-gradient-purple/10 rounded-full blur-3xl animate-pulse-slow"
                 style={{animationDelay: "1s"}} />
          </>
        )}
        {variant === "purple-pink" && (
          <>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-purple/20 dark:bg-gradient-purple/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-pink/20 dark:bg-gradient-pink/10 rounded-full blur-3xl animate-pulse-slow"
                 style={{animationDelay: "1s"}} />
          </>
        )}
      </div>
      {children}
    </div>
  );
}

interface GradientSectionProps {
  children: ReactNode;
  variant?: "blue-purple" | "purple-pink" | "orange-pink" | "cyan-blue";
  className?: string;
}

export function GradientSection({
  children,
  variant = "blue-purple",
  className
}: GradientSectionProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Section-level gradient background */}
      <div className="absolute inset-0 -z-10">
        {variant === "blue-purple" && (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-blue/10 dark:bg-gradient-blue/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-purple/10 dark:bg-gradient-purple/5 rounded-full blur-3xl" />
          </>
        )}
        {variant === "purple-pink" && (
          <>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-purple/10 dark:bg-gradient-purple/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-pink/10 dark:bg-gradient-pink/5 rounded-full blur-3xl" />
          </>
        )}
        {variant === "orange-pink" && (
          <>
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-orange/10 dark:bg-gradient-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-pink/10 dark:bg-gradient-pink/5 rounded-full blur-3xl" />
          </>
        )}
        {variant === "cyan-blue" && (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
          </>
        )}
      </div>
      {children}
    </div>
  );
}
