import Link from "next/link";
import { Dictionary, Locale } from "@/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

interface NavbarProps {
  dict: Dictionary["nav"];
  locale: Locale;
}

export function Navbar({ dict, locale }: NavbarProps) {
  const navLinks = [
    { href: `#about`, label: dict.about },
    { href: `#expertise`, label: dict.expertise },
    { href: `#services`, label: dict.services },
    { href: `#contact`, label: dict.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#5A3828]/10 bg-[#F5EFE3]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link
          href={`/${locale}`}
          className="group flex flex-col font-serif text-xl tracking-tight text-[#2F211A] transition-opacity hover:opacity-85 sm:text-2xl"
        >
          <span className="font-bold leading-none">HANNA TRUBA</span>
          <span className="font-sans text-[10px] font-medium tracking-widest uppercase text-[#5A3828]/70">
            Doctor of Philology
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium tracking-wide text-[#2F211A]/80 transition-colors hover:text-[#5A3828]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher currentLocale={locale} />
          
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 border-b border-[#304832] pb-0.5 font-sans text-xs font-semibold tracking-wider uppercase text-[#304832] transition-colors hover:border-[#657A55] hover:text-[#657A55]"
          >
            <span>{dict.talkCta}</span>
            <span>→</span>
          </Link>
        </div>

        <MobileNav dict={dict} locale={locale} />
      </div>
    </header>
  );
}