"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Dictionary, Locale } from "@/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface MobileNavProps {
  dict: Dictionary["nav"];
  locale: Locale;
}

export function MobileNav({ dict, locale }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Керування блокуванням скролу, подією Escape та ресайзом вікна
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#about", label: dict.about },
    { href: "#expertise", label: dict.expertise },
    { href: "#services", label: dict.services },
    { href: "#experience", label: dict.experience },
    { href: "#contact", label: dict.contact },
  ];

  return (
    <div className="flex items-center gap-3 md:hidden">
      {/* Перемикач мов у звичайній шапці */}
      <LanguageSwitcher currentLocale={locale} />

      {/* Кнопка відкриття меню (Бургер) */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-espresso/15 bg-sand/10 text-espresso focus:outline-hidden cursor-pointer"
      >
        <span className="h-0.5 w-5 bg-espresso" />
        <span className="h-0.5 w-5 bg-espresso" />
        <span className="h-0.5 w-5 bg-espresso" />
      </button>

      {/* Повноекранний портал, що монтується безпосередньо в document.body */}
      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-ivory p-6 md:hidden overflow-y-auto animate-in fade-in duration-200"
          >
            {/* Верхній ряд мобільного оверлея */}
            <div className="flex items-center justify-between border-b border-espresso/10 pb-4">
              <Link
                href={`/${locale}`}
                onClick={() => setIsOpen(false)}
                className="flex flex-col font-serif text-xl tracking-tight text-espresso"
              >
                <span className="font-semibold leading-none">Hanna Truba</span>
                <span className="font-sans text-[10px] font-medium tracking-widest uppercase text-espresso/60">
                  Doctor of Philology
                </span>
              </Link>

              <div className="flex items-center gap-3">
                <LanguageSwitcher currentLocale={locale} />

                {/* Кнопка закриття (✕) */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 bg-sand/10 text-espresso focus:outline-hidden cursor-pointer"
                >
                  <span className="text-xl leading-none">✕</span>
                </button>
              </div>
            </div>

            {/* Список навігаційних посилань */}
            <nav className="my-auto flex flex-col gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl font-medium tracking-wide text-espresso transition-colors hover:text-sage"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Нижня кнопка CTA */}
            <div className="border-t border-espresso/10 pt-6">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-espresso px-6 py-4 text-center font-sans text-sm font-semibold tracking-wider uppercase text-ivory transition-all hover:bg-dark-olive"
              >
                {dict.cta}
              </Link>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}