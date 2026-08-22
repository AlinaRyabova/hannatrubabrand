import { Dictionary } from "@/dictionaries";

interface ExpertiseProps {
  dict: Dictionary["expertise"];
}

export function Expertise({ dict }: ExpertiseProps) {
  return (
    <section id="expertise" className="scroll-mt-20 bg-[#E9DDCA] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-2xl">
          <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#657A55]">
            {dict.label}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#2F211A] sm:text-4xl md:text-5xl">
            {dict.heading}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {dict.items.map((item) => (
            <div
              key={item.number}
              className="group border-t-2 border-[#D4B58A] bg-[#F5EFE3] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#304832] hover:shadow-lg"
            >
              <span className="font-serif text-2xl font-bold text-[#D4B58A] group-hover:text-[#304832] transition-colors">
                {item.number}
              </span>
              
              <h3 className="mt-6 font-serif text-2xl font-bold text-[#2F211A]">
                {item.title}
              </h3>

              <ul className="mt-6 flex flex-col gap-3">
                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 font-sans text-sm text-[#5C4A40]"
                  >
                    <span className="font-semibold text-[#657A55]">—</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}