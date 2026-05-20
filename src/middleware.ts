import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const LOCALE_HEADER = "x-app-locale";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const defaultLocale = routing.defaultLocale;

  const prefixed = routing.locales.find(
    (locale) =>
      locale !== defaultLocale &&
      (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
  );

  if (prefixed) {
    const response = NextResponse.next();
    response.headers.set(LOCALE_HEADER, prefixed);
    return response;
  }

  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const stripped =
      pathname === `/${defaultLocale}`
        ? "/"
        : pathname.slice(`/${defaultLocale}`.length);
    return NextResponse.redirect(new URL(stripped, request.url));
  }

  const url = request.nextUrl.clone();
  url.pathname =
    pathname === "/"
      ? `/${defaultLocale}`
      : `/${defaultLocale}${pathname}`;
  const response = NextResponse.rewrite(url);
  response.headers.set(LOCALE_HEADER, defaultLocale);
  return response;
}

export const config = {
  matcher: ["/", "/(de|fr)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
