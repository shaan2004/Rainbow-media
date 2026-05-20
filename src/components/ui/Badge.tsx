import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1.5 text-xs font-semibold text-brand-primary backdrop-blur-md shadow-[0_0_15px_rgba(255,107,53,0.15)] tracking-wider uppercase",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
