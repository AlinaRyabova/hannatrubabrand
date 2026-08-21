import { Locale, Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  uk: () => import("./uk").then((module) => module.uk),
  en: () => import("./en").then((module) => module.en),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries.uk;
  return loader();
}

export * from "./types";