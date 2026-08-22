import Link from "next/link";
import { Dictionary } from "@/dictionaries";

interface FooterProps {
  dict: Dictionary["contact"];
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="border-t border-[#F5EFE3]/10 bg-[#2F211A] py-8 text-[#F5EFE3]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-75">
        <div>{dict.copyright}</div>
        <div className="hidden sm:block">{dict.footerTag}</div>
        <Link
          href="#top"
          className="inline-flex items-center gap-1 font-sans uppercase tracking-widest text-[#D4B58A] transition-colors hover:text-[#F5EFE3]"
        >
          <span>↑</span>
          <span>{dict.backToTop}</span>
        </Link>
      </div>
    </footer>
  );
}