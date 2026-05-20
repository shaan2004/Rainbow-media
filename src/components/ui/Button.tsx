import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          {
            // Variants
            "bg-brand-primary text-white hover:bg-brand-primary/90 hover:shadow-[0_0_20px_rgba(2,132,199,0.3)] border border-transparent":
              variant === "primary",
            "border border-border bg-transparent text-text-primary hover:bg-surface-2 hover:border-text-secondary/30":
              variant === "outline",
            "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-2":
              variant === "ghost",

            // Sizes
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
