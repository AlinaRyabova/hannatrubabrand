import Link from "next/link";
import Image from "next/image";
import { Dictionary } from "@/dictionaries";
import { InteractiveDisciplines } from "./InteractiveDisciplines";

interface HeroProps {
  dict: Dictionary["hero"];
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-ivory pt-8 pb-16 md:pt-16 md:pb-24 lg:py-24">
      {/* Декоративні фонові градієнтні акценти */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sand/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-sage/10 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Ліва колонка: Інформація та позиціонування */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            {/* Статусний бейдж */}
<div className="inline-flex items-start sm:items-center gap-2 rounded-xl sm:rounded-full border border-espresso/15 bg-sand/30 px-3 py-1.5 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-medium tracking-wide sm:tracking-wider uppercase text-espresso leading-snug sm:leading-none transition-all">
  <span className="mt-1 sm:mt-0 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
  <span>{dict.badge}</span>
</div>

            {/* Велике ім'я та титул */}
            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-espresso sm:text-5xl md:text-6xl lg:text-7xl">
              {dict.name}
            </h1>

            <p className="mt-3 font-serif text-xl font-medium text-sage italic sm:text-2xl">
              {dict.role}
            </p>

            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-espresso/80 sm:text-lg">
              {dict.description}
            </p>

            {/* Інтерактивний акцент: LANGUAGE. RESEARCH. BRAND. */}
            <InteractiveDisciplines disciplines={dict.disciplines} />

            {/* CTA Кнопки дії */}
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="#expertise"
                className="inline-flex items-center justify-center rounded-full bg-espresso px-7 py-3.5 text-sm font-medium tracking-wider text-ivory transition-all duration-200 hover:bg-dark-olive hover:shadow-md active:scale-98"
              >
                {dict.ctaPrimary}
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-espresso/25 bg-transparent px-7 py-3.5 text-sm font-medium tracking-wider text-espresso transition-all duration-200 hover:border-espresso hover:bg-sand/20 active:scale-98"
              >
                {dict.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Права колонка: Editorial фотопортрет */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="group relative aspect-4/5 w-full max-w-md overflow-hidden rounded-2xl border border-espresso/15 bg-sand/20 p-3 shadow-xl transition-transform duration-500 hover:shadow-2xl">
              
              {/* Контейнер зображення */}
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-sand/30">
                <Image
                  src="/images/hanna-truba.webp"
                  alt={`${dict.name} — ${dict.role}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Верхній editorial-лейбл поверх фото */}
                <div className="absolute top-4 inset-x-4 z-10 flex items-center justify-between rounded-lg bg-ivory/80 px-3 py-1.5 backdrop-blur-md text-[11px] font-semibold tracking-widest uppercase text-espresso/70">
                  <span>Hanna Truba</span>
                  <span>Doctor of Philology</span>
                </div>

                {/* Нижня статусна плашка поверх фото */}
                <div className="absolute bottom-4 inset-x-4 z-10 rounded-lg bg-ivory/85 px-4 py-2.5 backdrop-blur-md text-center shadow-xs">
                  <p className="text-xs font-medium tracking-wide text-espresso/90">
                    English Educator · Brand Manager
                  </p>
                </div>
              </div>

              {/* Декоративна тонка рамка поверх */}
              <div className="pointer-events-none absolute inset-3 z-20 rounded-xl border border-espresso/10" />
            </div>
          </div>

        </div>

        {/* Тонка горизонтальна смуга-розділювач під Hero */}
        <div className="mt-16 border-t border-espresso/10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-medium tracking-widest uppercase text-espresso/60">
            <span>Doctor of Philology</span>
            <span className="hidden sm:inline">•</span>
            <span>English Language Education</span>
            <span className="hidden sm:inline">•</span>
            <span>Brand Strategy & Positioning</span>
          </div>
        </div>
      </div>
    </section>
  );
}