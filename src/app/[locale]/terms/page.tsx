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
  const { meta } = getLegalPage("terms", locale);
  const url = absoluteUrl("/terms", locale);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/terms"),
    },
  };
}

export default function TermsPage({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const content = getLegalPage("terms", locale);
  return <LegalPage content={content} locale={locale} />;
}
