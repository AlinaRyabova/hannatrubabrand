import { Dictionary } from "@/dictionaries";

interface AboutProps {
  dict: Dictionary["about"];
}

export function About({ dict }: AboutProps) {
  const pillars = [
    {
      number: "01",
      role: dict.pillars.academic.role,
      title: dict.pillars.academic.title,
      description: dict.pillars.academic.description,
    },
    {
      number: "02",
      role: dict.pillars.english.role,
      title: dict.pillars.english.title,
      description: dict.pillars.english.description,
    },
    {
      number: "03",
      role: dict.pillars.brand.role,
      title: dict.pillars.brand.title,
      description: dict.pillars.brand.description,
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-sand/15 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Заголовок та інтро */}
        <div className="max-w-3xl">
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sage">
            {dict.tag}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-espresso sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-espresso/85 sm:text-lg">
            {dict.lead}
          </p>
        </div>

        {/* Об'єднана тристовпна editorial-сітка */}
        <div className="mt-16 grid grid-cols-1 overflow-hidden rounded-2xl border border-espresso/15 bg-ivory shadow-sm lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className={`group flex flex-col justify-between p-8 md:p-10 transition-colors duration-300 hover:bg-sand/10 ${
                index !== 0 ? "border-t border-espresso/15 lg:border-t-0 lg:border-l" : ""
              }`}
            >
              <div>
                {/* Номер та надзаголовок ролі */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-semibold text-sage/80">
                    {pillar.number}
                  </span>
                  <span className="rounded-full bg-sand/30 px-3 py-1 font-sans text-[11px] font-medium tracking-wider uppercase text-espresso/70">
                    {pillar.role}
                  </span>
                </div>

                {/* Назва ролі */}
                <h3 className="mt-8 font-serif text-2xl font-bold text-espresso sm:text-3xl">
                  {pillar.title}
                </h3>

                {/* Текст опису */}
                <p className="mt-4 font-sans text-sm leading-relaxed text-espresso/80 sm:text-base">
                  {pillar.description}
                </p>
              </div>

              {/* Тонка нижня риска при взаємодії */}
              <div className="mt-8 h-0.5 w-12 bg-espresso/20 transition-all duration-300 group-hover:w-20 group-hover:bg-sage" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}