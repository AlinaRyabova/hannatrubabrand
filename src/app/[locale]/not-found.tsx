import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center text-espresso">
      <span className="font-sans text-xs font-semibold tracking-widest uppercase text-sage">
        404 — Сторінку не знайдено / Page Not Found
      </span>
      <h1 className="mt-4 font-serif text-5xl font-bold tracking-tight text-espresso sm:text-6xl">
        Hanna Truba
      </h1>
      <p className="mt-4 max-w-md font-sans text-sm text-espresso/75 sm:text-base">
        Запитану сторінку або мовну версію не знайдено.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/uk"
          className="rounded-full bg-espresso px-6 py-3 text-xs font-medium tracking-wider text-ivory transition-all hover:bg-dark-olive"
        >
          Головна (UK)
        </Link>
        <Link
          href="/en"
          className="rounded-full border border-espresso/20 px-6 py-3 text-xs font-medium tracking-wider text-espresso transition-all hover:bg-sand/20"
        >
          Home (EN)
        </Link>
      </div>
    </div>
  );
}