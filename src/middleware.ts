import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import {
  LOCALE_COOKIE,
  resolvePreferredLocale,
} from "@/lib/locale-preference";
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

  // ads.txt must live at site root; crawlers also request /de/ads.txt, /fr/ads.txt.
  if (path === "/ads.txt" && locale !== defaultLocale) {
    return NextResponse.redirect(new URL("/ads.txt", request.url), 301);
  }

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
    return NextResponse.redirect(new URL(stripped, request.url), 301);
  }

  const preferred = resolvePreferredLocale(
    request.cookies.get(LOCALE_COOKIE)?.value,
    request.headers.get("accept-language"),
  );
  if (preferred !== defaultLocale) {
    const dest = toPublicPath(preferred, path);
    return NextResponse.redirect(new URL(dest, request.url), 302);
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
