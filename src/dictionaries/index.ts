import { Dictionary } from "./types";
import { uk } from "./uk";
import { en } from "./en";

export const LOCALES = ["uk", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "uk";

const dictionaries: Record<Locale, Dictionary> = {
  uk,
  en,
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export * from "./types";