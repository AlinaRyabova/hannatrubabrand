import Link from "next/link";
import { Dictionary } from "@/dictionaries";

interface ServicesProps {
  dict: Dictionary["services"];
}

export function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-20 bg-[#F5EFE3] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#657A55]">
              {dict.label}
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#2F211A] sm:text-4xl md:text-5xl">
              {dict.heading}
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-wider uppercase text-[#304832] transition-colors hover:text-[#657A55]"
          >
            <span>{dict.cta}</span>
            <span>→</span>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {dict.items.map((item, index) => (
            <article
              key={index}
              className="group flex flex-col justify-between border border-[#5A3828]/15 bg-[#F5EFE3] p-8 transition-all duration-300 hover:border-[#D4B58A] hover:bg-white hover:shadow-xl md:p-10"
            >
              <div>
                <span className="font-sans text-xs font-bold tracking-wider uppercase text-[#657A55]">
                  {item.badge}
                </span>

                <h3 className="mt-4 font-serif text-2xl font-bold text-[#5A3828] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-6 font-sans text-base leading-relaxed text-[#5C4A40]">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 border-t border-[#5A3828]/10 pt-6">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-wider uppercase text-[#304832] transition-all group-hover:gap-3 group-hover:text-[#657A55]"
                >
                  <span>{dict.cta}</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}