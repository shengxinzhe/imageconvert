import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { routing, type AppLocale } from "@/i18n/routing";
import { getLegalPage } from "@/lib/legal-l10n";
import { absoluteUrl, hreflangLanguages } from "@/lib/locale-path";

type PageProps = { params: { locale: string } };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = params.locale as AppLocale;
  const { meta } = getLegalPage("about", locale);
  const url = absoluteUrl("/about", locale);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/about"),
    },
  };
}

export default function AboutPage({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const content = getLegalPage("about", locale);
  return <LegalPage content={content} locale={locale} />;
}
