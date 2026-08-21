import { Dictionary } from "@/dictionaries";

interface ExperienceProps {
  dict: Dictionary["experience"];
}

export function Experience({ dict }: ExperienceProps) {
  return (
    <section id="experience" className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Заголовок секції */}
        <div className="max-w-2xl">
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sage">
            {dict.tag}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-espresso sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-espresso/75 sm:text-lg">
            {dict.subtitle}
          </p>
        </div>

        {/* Вертикальний таймлайн */}
        <div className="relative mt-16 pl-6 sm:pl-10 before:absolute before:top-3 before:bottom-3 before:left-2 sm:before:left-3.5 before:w-px before:bg-espresso/15">
          <ol className="space-y-12">
            {dict.items.map((item) => (
              <li key={item.id} className="group relative flex flex-col items-start">
                {/* Вузлова точка таймлайну */}
                <div className="absolute -left-[29px] sm:-left-[35px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ivory bg-sage transition-transform duration-300 group-hover:scale-125 group-hover:bg-espresso shadow-xs" />

                <div className="w-full rounded-2xl border border-espresso/10 bg-sand/10 p-6 md:p-8 transition-all duration-300 hover:border-espresso/30 hover:bg-sand/20 hover:shadow-md">
                  {/* Період та організація */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <time className="font-sans text-xs font-semibold tracking-wider uppercase text-sage">
                      {item.period}
                    </time>
                    <span className="font-sans text-xs font-medium text-espresso/60">
                      {item.organization}
                    </span>
                  </div>

                  {/* Посада / Роль */}
                  <h3 className="mt-3 font-serif text-2xl font-bold text-espresso">
                    {item.role}
                  </h3>

                  {/* Опис */}
                  <p className="mt-3 font-sans text-sm leading-relaxed text-espresso/80 sm:text-base">
                    {item.description}
                  </p>

                  {/* Ключові досягнення */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5 border-t border-espresso/10 pt-4">
                      {item.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 font-sans text-xs font-medium text-espresso/75 sm:text-sm"
                        >
                          <span className="h-1 w-1 rounded-full bg-sage" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}