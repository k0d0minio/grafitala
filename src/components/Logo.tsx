import { cn } from "@/lib/utils";

/**
 * Grafitala mark — an isometric folding carton rendered in the brand
 * green, a quiet tonal echo of the wordmark logo.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
    >
      <rect width="40" height="40" rx="10" className="fill-[var(--ink)]" />
      {/* box top */}
      <path d="M20 8 L31 13.4 L20 18.8 L9 13.4 Z" fill="oklch(0.72 0.13 150)" />
      {/* left face */}
      <path
        d="M9 13.4 L20 18.8 L20 31.6 L9 26.2 Z"
        fill="oklch(0.58 0.12 151)"
      />
      {/* right face */}
      <path
        d="M31 13.4 L20 18.8 L20 31.6 L31 26.2 Z"
        fill="oklch(0.45 0.1 150)"
      />
    </svg>
  );
}

export function Logo({
  className,
  onClick
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        className
      )}
      aria-label="Grafitala — home"
    >
      <LogoMark className="transition-transform duration-300 group-hover:-rotate-6" />
      <span className="font-display text-xl font-bold tracking-tight text-foreground">
        Grafitala
      </span>
    </a>
  );
}
