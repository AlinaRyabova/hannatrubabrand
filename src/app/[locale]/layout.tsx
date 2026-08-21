import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { LOCALES, DEFAULT_LOCALE, isLocale } from "@/dictionaries";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const isEn = currentLocale === "en";

  return {
    title: isEn
      ? "Hanna Truba | Doctor of Philology · English Educator · Brand Manager"
      : "Ганна Труба | Доктор філологічних наук · Викладач англійської мови · Бренд-менеджер",
    description: isEn
      ? "Language, research and brand strategy — brought together through one professional vision."
      : "Філологія. Англійська мова. Брендинг. Експертиза, що працює на результат.",
    alternates: {
      canonical: `/${currentLocale}`,
      languages: {
        uk: "/uk",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? locale : DEFAULT_LOCALE;

  return (
    <html
      lang={currentLocale}
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-ivory text-espresso antialiased">
        <div data-locale={currentLocale}>{children}</div>
      </body>
    </html>
  );
}