/**
 * Locale configuration for the Grafitala site.
 * English is the default; Portuguese is offered for the local (pt-PT) audience.
 */
export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Human-facing labels for the language switcher. */
export const localeNames: Record<Locale, { short: string; label: string }> = {
  en: { short: "EN", label: "English" },
  pt: { short: "PT", label: "Português" }
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "pt";
}
