import Link from "next/link";
import Image from "next/image";
import { Dictionary } from "@/dictionaries";
import { InteractiveDisciplines } from "./InteractiveDisciplines";

interface HeroProps {
  dict: Dictionary["hero"];
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F5EFE3] pt-10 pb-16 md:pt-16 md:pb-24 lg:py-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#D4B58A]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-6 h-80 w-80 rounded-full bg-[#657A55]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          <div className="flex flex-col items-start lg:col-span-7">
            
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#657A55]">
              {dict.tag}
            </span>

            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#2F211A] sm:text-6xl lg:text-7xl">
              {dict.name}
            </h1>

            <div className="mt-4 flex flex-col gap-1 border-l-2 border-[#D4B58A] pl-4 sm:pl-5">
              {dict.titles.map((title) => (
                <span
                  key={title}
                  className="font-serif text-xl font-medium text-[#5A3828] sm:text-2xl"
                >
                  {title}
                </span>
              ))}
            </div>

            <InteractiveDisciplines concept={dict.concept} />

            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-[#5C4A40] sm:text-lg">
              {dict.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="#expertise"
                className="inline-flex items-center justify-center border border-[#5A3828] bg-[#5A3828] px-8 py-3.5 font-sans text-xs font-semibold tracking-wider uppercase text-[#F5EFE3] transition-all duration-300 hover:border-[#304832] hover:bg-[#304832] active:scale-98"
              >
                {dict.ctaExpertise}
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border border-[#5A3828] bg-transparent px-8 py-3.5 font-sans text-xs font-semibold tracking-wider uppercase text-[#5A3828] transition-all duration-300 hover:bg-[#E9DDCA] active:scale-98"
              >
                {dict.ctaContact}
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="group relative w-full max-w-md">
              
              <div className="relative aspect-4/5 w-full overflow-hidden border border-[#5A3828]/20 bg-[#E9DDCA] shadow-[16px_16px_0px_#E9DDCA,17px_17px_0px_#D4B58A]">
                <Image
                  src="/images/hanna-truba.webp"
                  alt={`${dict.name} — ${dict.badge}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 z-10 bg-[#304832] px-5 py-3 shadow-lg">
                <span className="font-serif text-sm font-medium italic tracking-wide text-[#F5EFE3] sm:text-base">
                  {dict.badge}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}