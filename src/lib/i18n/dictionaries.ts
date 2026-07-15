import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";

/** The canonical dictionary shape, derived from the English source. */
export type Dictionary = typeof en;

export const dictionaries: Record<Locale, Dictionary> = { en, pt };
