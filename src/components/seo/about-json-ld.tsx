import type { AppLocale } from "@/i18n/routing";
import { SITE_AI_SUMMARY } from "@/lib/ai-discovery";
import { absoluteUrl } from "@/lib/locale-path";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const SCHEMA_LANG: Record<AppLocale, string> = {
  en: "en-US",
  de: "de-DE",
  fr: "fr-FR",
};

const ABOUT_DESCRIPTION: Record<AppLocale, string> = {
  en: "About HeicSave: free browser-local HEIC, WebP, and AVIF converters for iPhone users and developers.",
  de: "Über HeicSave: kostenlose browser-lokale HEIC-, WebP- und AVIF-Konverter für iPhone-Nutzer und Entwickler.",
  fr: "À propos de HeicSave : convertisseurs HEIC, WebP et AVIF gratuits dans le navigateur pour iPhone et développeurs.",
};

export function AboutJsonLd({ locale }: { locale: AppLocale }) {
  const pageUrl = absoluteUrl("/about", locale);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#aboutpage`,
        url: pageUrl,
        name: `About ${SITE_NAME}`,
        description: ABOUT_DESCRIPTION[locale],
        inLanguage: SCHEMA_LANG[locale],
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        mainEntity: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_AI_SUMMARY.tagline,
        knowsAbout: [
          "HEIC image conversion",
          "AVIF image conversion",
          "WebP image conversion",
          "Browser-local privacy-preserving image tools",
        ],
        areaServed: ["US", "DE", "FR", "GB"],
        audience: {
          "@type": "Audience",
          audienceType: SITE_AI_SUMMARY.primaryAudience,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
