import { NextRequest, NextResponse } from "next/server";
import { LOCALES, DEFAULT_LOCALE, isLocale } from "@/dictionaries";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Перевірка, чи шлях вже починається з валідної локалі
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Якщо локаль відсутня — перенаправляємо на дефолтну (/uk)
  request.nextUrl.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Пропускаємо всі внутрішні шляхи Next.js, API та статичні файли
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};