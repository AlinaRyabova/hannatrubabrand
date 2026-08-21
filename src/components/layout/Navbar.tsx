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
   { href: "#experience", label: dict.experience },
    { href: `#contact`, label: dict.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-espresso/10 bg-ivory/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Логотип / Ім'я бренду */}
        <Link
          href={`/${locale}`}
          className="group flex flex-col font-serif text-xl tracking-tight text-espresso transition-opacity hover:opacity-85 sm:text-2xl"
        >
          <span className="font-semibold leading-none">Hanna Truba</span>
          <span className="font-sans text-[10px] font-medium tracking-widest uppercase text-espresso/60">
            Doctor of Philology
          </span>
        </Link>

        {/* Десктопна навігація */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium tracking-wide text-espresso/80 transition-colors hover:text-espresso"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Десктопний правий блок (Перемикач мов + CTA кнопка) */}
        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitcher currentLocale={locale} />
          
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-espresso px-5 py-2.5 text-xs font-medium tracking-wider text-ivory transition-all duration-200 hover:bg-dark-olive hover:shadow-sm active:scale-98"
          >
            {dict.cta}
          </Link>
        </div>

        {/* Мобільна навігація */}
        <MobileNav dict={dict} locale={locale} />
      </div>
    </header>
  );
}