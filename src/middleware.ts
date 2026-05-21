import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { resolvePathRedirect } from "@/lib/url-redirects";

const LOCALE_HEADER = "x-app-locale";

function splitLocalePath(pathname: string): { locale: string; path: string } {
  const defaultLocale = routing.defaultLocale;

  for (const locale of routing.locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return { locale, path: "/" };
    if (pathname.startsWith(`/${locale}/`)) {
      return { locale, path: pathname.slice(`/${locale}`.length) || "/" };
    }
  }

  if (pathname === `/${defaultLocale}`) {
    return { locale: defaultLocale, path: "/" };
  }
  if (pathname.startsWith(`/${defaultLocale}/`)) {
    return {
      locale: defaultLocale,
      path: pathname.slice(`/${defaultLocale}`.length) || "/",
    };
  }

  return { locale: defaultLocale, path: pathname };
}

function toPublicPath(locale: string, path: string): string {
  const defaultLocale = routing.defaultLocale;
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const defaultLocale = routing.defaultLocale;

  const { locale, path } = splitLocalePath(pathname);
  const redirectTarget = resolvePathRedirect(path);
  if (redirectTarget) {
    const dest = toPublicPath(locale, redirectTarget);
    return NextResponse.redirect(new URL(dest, request.url), 301);
  }

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
