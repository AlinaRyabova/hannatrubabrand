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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
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
    { href: "#contact", label: dict.contact },
  ];

  return (
    <div className="flex items-center gap-3 md:hidden">
      <LanguageSwitcher currentLocale={locale} />

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#5A3828]/20 bg-[#E9DDCA] text-[#5A3828] cursor-pointer"
      >
        <span className="h-0.5 w-5 bg-[#5A3828]" />
        <span className="h-0.5 w-5 bg-[#5A3828]" />
      </button>

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#F5EFE3] p-6 md:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-[#5A3828]/10 pb-4">
              <Link
                href={`/${locale}`}
                onClick={() => setIsOpen(false)}
                className="flex flex-col font-serif text-xl tracking-tight text-[#2F211A]"
              >
                <span className="font-bold leading-none">HANNA TRUBA</span>
                <span className="font-sans text-[10px] font-medium tracking-widest uppercase text-[#5A3828]/70">
                  Doctor of Philology
                </span>
              </Link>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5A3828]/20 bg-[#E9DDCA] text-[#5A3828] cursor-pointer text-lg font-semibold"
                >
                  ✕
                </button>
              </div>
            </div>

            <nav className="my-auto flex flex-col gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl font-medium tracking-wide text-[#2F211A] transition-colors hover:text-[#657A55]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-[#5A3828]/10 pt-6">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center bg-[#5A3828] px-6 py-4 text-center font-sans text-xs font-semibold tracking-widest uppercase text-[#F5EFE3] transition-all hover:bg-[#304832]"
              >
                {dict.talkCta} →
              </Link>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}