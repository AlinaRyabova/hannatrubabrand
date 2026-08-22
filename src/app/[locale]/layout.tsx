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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const isEn = currentLocale === "en";

  const title = isEn
    ? "Hanna Truba | Doctor of Philology · English Educator · Brand Manager"
    : "Ганна Труба | Доктор філологічних наук · Викладач англійської мови · Бренд-менеджер";

  const description = isEn
    ? "Personal brand of Hanna Truba, Doctor of Philology. Academic research, premium English coaching, and strategic brand management."
    : "Офіційний сайт Ганни Труби: доктор філологічних наук, викладач англійської мови та бренд-менеджер. Мова, дослідження, бренд-стратегія.";

  const siteUrl = "https://hannatrubabrand.vercel.app";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s | Hanna Truba",
    },
    description,
    keywords: [
      "Hanna Truba",
      "Ганна Труба",
      "Doctor of Philology",
      "доктор філологічних наук",
      "English language educator",
      "викладач англійської мови",
      "Brand manager",
      "бренд-менеджер",
      "academic research",
      "мовний консалтинг",
    ],
    authors: [{ name: "Hanna Truba", url: siteUrl }],
    creator: "Hanna Truba",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${siteUrl}/${currentLocale}`,
      languages: {
        uk: `${siteUrl}/uk`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "profile",
      locale: currentLocale === "uk" ? "uk_UA" : "en_US",
      url: `${siteUrl}/${currentLocale}`,
      title,
      description,
      siteName: "Hanna Truba Brand",
      images: [
        {
          url: `${siteUrl}/images/hanna-truba.webp`,
          width: 1200,
          height: 630,
          alt: "Hanna Truba — Doctor of Philology, English Educator, Brand Manager",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/images/hanna-truba.webp`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const isEn = currentLocale === "en";

  // Google Knowledge Graph Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: isEn ? "Hanna Truba" : "Ганна Труба",
    jobTitle: isEn
      ? "Doctor of Philology, English Language Educator, Brand Manager"
      : "Доктор філологічних наук, Викладач англійської мови, Бренд-менеджер",
    url: "https://hannatrubabrand.vercel.app",
    image: "https://hannatrubabrand.vercel.app/images/hanna-truba.webp",
    sameAs: [
      "https://www.linkedin.com/in/hanna-truba-032964227",
      "https://instagram.com/dr_hanna_english_tutor",
      "https://facebook.com/anna.truba.997554",
    ],
    knowsAbout: [
      "Philology",
      "Linguistics",
      "Academic English",
      "Brand Management",
      "Strategic Communications",
    ],
  };

  return (
    <html
      lang={currentLocale}
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F5EFE3] text-[#2F211A] antialiased">
        <div data-locale={currentLocale}>{children}</div>
      </body>
    </html>
  );
}