import { getDictionary, LOCALES, isLocale } from "@/dictionaries";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Expertise } from "@/components/sections/expertise/Expertise";
import { Services } from "@/components/sections/services/Services";
import { Quote } from "@/components/sections/quote/Quote";
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

  const dict = await getDictionary(locale);

  return (
    <div id="top" className="min-h-screen bg-[#F5EFE3] text-[#2F211A]">
      <Navbar dict={dict.nav} locale={locale} />

      <main>
        <Hero dict={dict.hero} />

        <div className="border-y border-[#5A3828]/15 bg-[#E9DDCA] py-4 text-center">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-[#5A3828] md:text-sm">
              {dict.credibilityStrip}
            </p>
          </div>
        </div>

        <About dict={dict.about} />

        <Expertise dict={dict.expertise} />

        <Services dict={dict.services} />

        <Quote dict={dict.quote} />


        <Contact dict={dict.contact} />
      </main>

      <Footer dict={dict.contact} />
    </div>
  );
}