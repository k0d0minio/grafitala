/**
 * Locale-invariant company facts for the Grafitala site.
 *
 * Translatable copy (navigation, product descriptions, section text, opening
 * hours, etc.) lives in the locale dictionaries under `src/lib/i18n`. Only
 * values that read the same in every language belong here.
 */

export const company = {
  name: "Grafitala",
  foundedYear: 1993,
  location: "Abóboda, Portugal",
  email: "grafitala@grafitala.com",
  phone: "+351 214 441 161",
  phoneHref: "tel:+351214441161",
  address: {
    line1: "Rua Natael Rianço",
    line2: "2785-543 S. Domingos de Rana",
    region: "Abóboda · Cascais, Portugal"
  }
} as const;

/** Stable keys shared between the dictionaries and icon maps. */
export const productKeys = [
  "jelly",
  "ready-meals",
  "pudding",
  "meat",
  "labels"
] as const;

export type ProductKey = (typeof productKeys)[number];
