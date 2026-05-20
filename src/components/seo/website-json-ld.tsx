import type { AppLocale } from "@/i18n/routing";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const SITE_DESCRIPTION: Record<AppLocale, string> = {
  en: "Free online image converters for HEIC, WebP, and AVIF. Files never leave your browser.",
  de: "Kostenlose Online-Bildkonverter für HEIC, WebP und AVIF. Dateien bleiben in Ihrem Browser.",
  fr: "Convertisseurs d'images en ligne gratuits pour HEIC, WebP et AVIF. Les fichiers restent dans votre navigateur.",
};

const SCHEMA_LANG: Record<AppLocale, string> = {
  en: "en-US",
  de: "de-DE",
  fr: "fr-FR",
};

export function WebsiteJsonLd({ locale }: { locale: AppLocale }) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION[locale],
        inLanguage: SCHEMA_LANG[locale],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION[locale],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
