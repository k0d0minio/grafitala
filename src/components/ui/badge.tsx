import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Small pill used for eyebrow labels above section headings.
 */
export function Badge({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
