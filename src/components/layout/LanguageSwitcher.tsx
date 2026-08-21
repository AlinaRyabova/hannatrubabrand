"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/dictionaries";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Функція для заміни поточної локалі в шляху на нову
  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-espresso/15 bg-sand/20 px-2 py-1 text-xs font-medium tracking-wider">
      <Link
        href={redirectedPathName("uk")}
        className={`rounded-full px-2 py-0.5 transition-all duration-200 ${
          currentLocale === "uk"
            ? "bg-espresso text-ivory shadow-xs"
            : "text-espresso/70 hover:text-espresso"
        }`}
      >
        UK
      </Link>
      <span className="text-espresso/30">|</span>
      <Link
        href={redirectedPathName("en")}
        className={`rounded-full px-2 py-0.5 transition-all duration-200 ${
          currentLocale === "en"
            ? "bg-espresso text-ivory shadow-xs"
            : "text-espresso/70 hover:text-espresso"
        }`}
      >
        EN
      </Link>
    </div>
  );
}