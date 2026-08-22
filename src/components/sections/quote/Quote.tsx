import { Dictionary } from "@/dictionaries";

interface QuoteProps {
  dict: Dictionary["quote"];
}

export function Quote({ dict }: QuoteProps) {
  return (
    <section className="bg-[#304832] py-24 text-[#F5EFE3] text-center">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <span className="font-serif text-5xl text-[#D4B58A] opacity-70 leading-none">“</span>
        
        <blockquote className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl italic font-normal leading-snug text-[#F5EFE3]">
          {dict.text}
        </blockquote>

        <div className="mt-8 flex flex-col items-center">
          <span className="font-sans text-sm font-bold tracking-[0.15em] uppercase text-[#D4B58A]">
            {dict.author}
          </span>
          <span className="mt-1 font-sans text-xs tracking-widest uppercase text-[#E9DDCA]/80">
            {dict.role}
          </span>
        </div>
      </div>
    </section>
  );
}