import Link from "next/link";
import { Dictionary } from "@/dictionaries";

interface FooterProps {
  dict: Dictionary["footer"];
}

export function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-espresso/10 bg-ivory py-12 text-espresso">
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Бренд та копірайт */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="font-serif text-lg font-bold tracking-tight text-espresso">
            Hanna Truba
          </span>
          <p className="mt-1 font-sans text-xs text-espresso/60">
            {dict.brandTagline}
          </p>
          <p className="mt-1 font-sans text-xs text-espresso/40">
            © {currentYear} {dict.rights}
          </p>
        </div>

        {/* Кнопка швидкого переходу вгору */}
        <Link
          href="#top"
          className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider uppercase text-sage transition-colors hover:text-espresso"
        >
          <span>↑</span>
          <span>{dict.backToTop}</span>
        </Link>

      </div>
    </footer>
  );
}