"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { locales, localeNames } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/**
 * Compact EN / PT toggle. Segmented control so both options are always visible
 * and reachable in a single tap.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.languageSwitcher.ariaLabel}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-lg border border-border bg-secondary/50 p-0.5",
        className
      )}
    >
      <Languages
        className="ml-1.5 mr-0.5 h-3.5 w-3.5 text-muted-foreground"
        aria-hidden="true"
      />
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={cn(
              "rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
              active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="sr-only">{localeNames[code].label}</span>
            <span aria-hidden="true">{localeNames[code].short}</span>
          </button>
        );
      })}
    </div>
  );
}
