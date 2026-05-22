import { LegalPage } from "@/components/legal/legal-page";
import { routing, type AppLocale } from "@/i18n/routing";
import { getLegalPage } from "@/lib/legal-l10n";
import { legalPageMetadata } from "@/lib/site-metadata";

type PageProps = { params: { locale: string } };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const { meta } = getLegalPage("privacy", locale);
  return legalPageMetadata("/privacy", meta, locale);
}

export default function PrivacyPage({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const content = getLegalPage("privacy", locale);
  return <LegalPage content={content} locale={locale} />;
}
