import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: "blue-purple" | "purple-pink" | "green-emerald" | "orange-red" | "cyan-blue";
  className?: string;
}

const gradientClasses = {
  "blue-purple": "from-gradient-blue to-gradient-purple",
  "purple-pink": "from-gradient-purple to-gradient-pink",
  "green-emerald": "from-gradient-green to-gradient-emerald",
  "orange-red": "from-gradient-orange to-gradient-red",
  "cyan-blue": "from-gradient-cyan to-gradient-blue",
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient = "blue-purple",
  className
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800",
        "rounded-2xl p-6 transition-all duration-300",
        "hover:border-gradient-blue dark:hover:border-gradient-blue hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
           style={{backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`}} />

      <div className="relative">
        <div className={cn(
          "w-12 h-12 rounded-xl text-white flex items-center justify-center shadow-lg mb-4",
          "group-hover:scale-110 transition-transform duration-300",
          `bg-gradient-to-br ${gradientClasses[gradient]}`
        )}>
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="font-bold text-lg mb-2 group-hover:text-gradient-blue dark:group-hover:text-gradient-blue transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

interface FeatureGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({ children, columns = 3, className }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn(
      "grid grid-cols-1 gap-6",
      gridCols[columns],
      className
    )}>
      {children}
    </div>
  );
}
