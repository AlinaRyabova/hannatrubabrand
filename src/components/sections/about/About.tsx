import { Dictionary } from "@/dictionaries";

interface AboutProps {
  dict: Dictionary["about"];
}

export function About({ dict }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-20 bg-[#F5EFE3] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          <div className="lg:col-span-7">
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#657A55]">
              {dict.label}
            </span>
            <h2 className="mt-3 whitespace-pre-line font-serif text-3xl font-bold tracking-tight text-[#2F211A] sm:text-4xl md:text-5xl">
              {dict.heading}
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#5C4A40] sm:text-lg">
              {dict.text1}
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-[#5C4A40] sm:text-lg">
              {dict.text2}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border-l-3 border-[#5A3828] bg-[#E9DDCA] p-8 md:p-10">
              <div className="flex flex-col gap-3">
                <span className="font-serif text-2xl font-semibold text-[#2F211A] sm:text-3xl">
                  {dict.manifesto.line1}
                </span>
                <span className="font-serif text-2xl font-semibold text-[#2F211A] sm:text-3xl">
                  {dict.manifesto.line2}
                </span>
                <span className="font-serif text-2xl font-semibold text-[#2F211A] sm:text-3xl">
                  {dict.manifesto.line3}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}