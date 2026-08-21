import { Dictionary } from "@/dictionaries";

interface ExpertiseProps {
  dict: Dictionary["expertise"];
}

export function Expertise({ dict }: ExpertiseProps) {
  const categories = [
    {
      key: "philology",
      title: dict.categories.philology.title,
      skills: dict.categories.philology.skills,
      accent: "border-sand/60 bg-sand/10",
    },
    {
      key: "english",
      title: dict.categories.english.title,
      skills: dict.categories.english.skills,
      accent: "border-sage/40 bg-sage/5",
    },
    {
      key: "brand",
      title: dict.categories.brand.title,
      skills: dict.categories.brand.skills,
      accent: "border-espresso/20 bg-espresso/5",
    },
    {
      key: "professional",
      title: dict.categories.professional.title,
      skills: dict.categories.professional.skills,
      accent: "border-dark-olive/30 bg-dark-olive/5",
    },
  ];

  return (
    <section id="expertise" className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Заголовок секції */}
        <div className="max-w-2xl">
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sage">
            {dict.tag}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-espresso sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
        </div>

        {/* 4-колонкова сітка компетенцій */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.key}
              className={`flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 hover:shadow-md ${category.accent}`}
            >
              <div>
                {/* Назва категорії */}
                <h3 className="font-serif text-xl font-bold tracking-tight text-espresso sm:text-2xl">
                  {category.title}
                </h3>
                <div className="mt-3 h-0.5 w-8 bg-espresso/20" />

                {/* Список навичок (Editorial Pill Tags) */}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="inline-flex items-center rounded-lg border border-espresso/15 bg-ivory/80 px-3 py-1.5 font-sans text-xs font-medium text-espresso transition-all duration-200 hover:border-espresso hover:bg-sand/30"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}