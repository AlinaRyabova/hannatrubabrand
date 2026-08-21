import Link from "next/link";
import { Dictionary } from "@/dictionaries";

interface ServicesProps {
  dict: Dictionary["services"];
}

export function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-24 bg-sand/15 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Верхній блок: Тег та Заголовок секції */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sage">
              {dict.tag}
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-espresso sm:text-4xl md:text-5xl">
              {dict.title}
            </h2>
          </div>
          
          <Link
            href="#contact"
            className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-espresso transition-colors hover:text-sage"
          >
            {dict.cta}
          </Link>
        </div>

        {/* 3 флагманські напрямки співпраці */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {dict.items.map((item) => (
            <article
              key={item.number}
              className="group relative flex flex-col justify-between rounded-2xl border border-espresso/15 bg-ivory p-8 transition-all duration-300 hover:-translate-y-1 hover:border-espresso/40 hover:shadow-lg md:p-10"
            >
              <div>
                {/* Номер та тонка лінія */}
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl font-light text-sage/80 transition-colors group-hover:text-sage">
                    {item.number}
                  </span>
                  <span className="h-px w-16 bg-espresso/15 transition-all duration-300 group-hover:w-24 group-hover:bg-sage" />
                </div>

                {/* Назва напрямку */}
                <h3 className="mt-8 font-serif text-2xl font-bold text-espresso sm:text-3xl">
                  {item.title}
                </h3>

                {/* Підзаголовок / Спеціалізація */}
                <p className="mt-2 font-serif text-base font-medium italic text-sage">
                  {item.subtitle}
                </p>

                {/* Детальний опис */}
                <p className="mt-6 font-sans text-sm leading-relaxed text-espresso/80 sm:text-base">
                  {item.description}
                </p>
              </div>

              {/* Інтерактивне посилання переходу до контакту */}
              <div className="mt-10 border-t border-espresso/10 pt-6">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-espresso transition-all duration-200 group-hover:text-sage"
                >
                  <span>{dict.cta}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}