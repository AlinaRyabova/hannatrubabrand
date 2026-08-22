import { Dictionary } from "@/dictionaries";
import { ContactForm } from "./ContactForm";

interface ContactProps {
  dict: Dictionary["contact"];
}

export function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#2F211A] py-20 md:py-28 text-[#F5EFE3]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5">
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#D4B58A]">
              {dict.label}
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#F5EFE3] sm:text-4xl md:text-5xl">
              {dict.heading}
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#E9DDCA]/90">
              {dict.description}
            </p>

            <div className="mt-8">
              <a
                href={`https://mail.ukr.net/desktop/write?to=${dict.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#D4B58A] bg-[#D4B58A] px-8 py-3.5 font-sans text-xs font-bold tracking-wider uppercase text-[#2F211A] transition-all hover:bg-white hover:border-white active:scale-98"
              >
                {dict.btnEmail} ↗
              </a>
            </div>

            <div className="mt-10 border-t border-[#F5EFE3]/15 pt-8">
              <a
                href={`mailto:${dict.email}`}
                className="block font-sans text-xs font-semibold tracking-widest uppercase text-[#D4B58A] hover:underline"
              >
                {dict.email}
              </a>
              
              <div className="mt-4 flex flex-wrap gap-5 text-sm">
                <a
                  href={dict.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[#E9DDCA] transition-colors hover:text-[#D4B58A] underline underline-offset-4"
                >
                  {dict.socials.linkedin.label}
                </a>
                <a
                  href={dict.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[#E9DDCA] transition-colors hover:text-[#D4B58A] underline underline-offset-4"
                >
                  {dict.socials.instagram.label}
                </a>
                <a
                  href={dict.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[#E9DDCA] transition-colors hover:text-[#D4B58A] underline underline-offset-4"
                >
                  {dict.socials.facebook.label}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm formDict={dict.form} />
          </div>

        </div>
      </div>
    </section>
  );
}