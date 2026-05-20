"use client";

import NextLink from "next/link";
import { useParams } from "next/navigation";
import type { ComponentProps } from "react";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { localePath } from "@/lib/locale-path";

export { usePathname, useRouter } from "next/navigation";

export function Link({
  href,
  ...props
}: ComponentProps<typeof NextLink> & { href: string }) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const localized =
    typeof href === "string" ? localePath(href, locale) : href;

  return <NextLink href={localized} {...props} />;
}

export function getPathname(path: string, locale: AppLocale): string {
  return localePath(path, locale);
}
