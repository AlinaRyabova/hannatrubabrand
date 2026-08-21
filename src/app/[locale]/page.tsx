import { getDictionary, LOCALES, isLocale } from "@/dictionaries";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Expertise } from "@/components/sections/expertise/Expertise";
import { Services } from "@/components/sections/services/Services";
import { Experience } from "@/components/sections/experience/Experience";
import { Contact } from "@/components/sections/contact/Contact";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  // Завдяки isLocale, TypeScript точно знає, що locale має тип Locale
  const dict = await getDictionary(locale);

  return (
    <div id="top" className="min-h-screen bg-ivory text-espresso">
      {/* Навігація */}
      <Navbar dict={dict.nav} locale={locale} />

      <main>
        {/* 1. Hero Section */}
        <Hero dict={dict.hero} />

        {/* 2. About / Professional Story */}
        <About dict={dict.about} />

        {/* 3. Areas of Expertise */}
        <Expertise dict={dict.expertise} />

        {/* 4. Services / Formats */}
        <Services dict={dict.services} />

        {/* 5. Experience / Milestones */}
        <Experience dict={dict.experience} />

        {/* 6. Contact & Inquiry Form */}
        <Contact dict={dict.contact} />
      </main>

      {/* 7. Footer */}
      <Footer dict={dict.footer} />
    </div>
  );
}