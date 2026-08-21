import { Dictionary } from "@/dictionaries";
import { ContactForm } from "./ContactForm";

interface ContactProps {
  dict: Dictionary["contact"];
}

export function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-24 bg-sand/15 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Ліва колонка: Інформаційний блок і контакти */}
          <div className="lg:col-span-5">
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sage">
              {dict.tag}
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-espresso sm:text-4xl md:text-5xl">
              {dict.title}
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-espresso/80">
              {dict.subtitle}
            </p>

            <div className="mt-10 border-t border-espresso/15 pt-8">
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-espresso/60">
                {dict.directContactLabel}
              </span>
              <div className="mt-4 flex flex-col gap-3 font-sans text-base font-medium text-espresso">
                <a
                  href="mailto:contact@hannatruba.com"
                  className="transition-colors hover:text-sage"
                >
                  contact@hannatruba.com
                </a>
                <div className="flex gap-4 text-sm text-espresso/80">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-espresso underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-espresso underline"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Права колонка: Клієнтська інтерактивна форма */}
          <div className="lg:col-span-7">
            <ContactForm dict={dict} />
          </div>

        </div>
      </div>
    </section>
  );
}