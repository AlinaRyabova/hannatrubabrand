"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/dictionaries";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#5A3828]/15 bg-[#E9DDCA] p-1 text-xs font-semibold">
      <Link
        href={redirectedPathName("uk")}
        className={`rounded-full px-2.5 py-0.5 transition-all duration-200 ${
          currentLocale === "uk"
            ? "bg-[#5A3828] text-[#F5EFE3] shadow-xs"
            : "text-[#5A3828]/70 hover:text-[#5A3828]"
        }`}
      >
        UA
      </Link>
      <Link
        href={redirectedPathName("en")}
        className={`rounded-full px-2.5 py-0.5 transition-all duration-200 ${
          currentLocale === "en"
            ? "bg-[#5A3828] text-[#F5EFE3] shadow-xs"
            : "text-[#5A3828]/70 hover:text-[#5A3828]"
        }`}
      >
        EN
      </Link>
    </div>
  );
}