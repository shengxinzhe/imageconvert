import type { AppLocale } from "@/i18n/routing";
import {
  AI_DEFINED_TERMS,
  AI_TOOL_CATALOG,
  HOME_FAQ_BY_LOCALE,
  SITE_AI_SUMMARY,
} from "@/lib/ai-discovery";
import { absoluteUrl } from "@/lib/locale-path";
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
  const homeUrl = absoluteUrl("/", locale);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${homeUrl}#website`,
        url: homeUrl,
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
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/apple-touch-icon.png`,
        },
        description: SITE_DESCRIPTION[locale],
        knowsAbout: [
          "HEIC image conversion",
          "AVIF image conversion",
          "WebP image conversion",
          "Browser-local privacy-preserving tools",
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${homeUrl}#tools`,
        name: "Free image converters",
        description: SITE_AI_SUMMARY.tagline,
        numberOfItems: AI_TOOL_CATALOG.length,
        itemListElement: AI_TOOL_CATALOG.map((tool, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: tool.name,
          url: absoluteUrl(`/${tool.slug}`, locale),
          description: tool.useWhen,
        })),
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${homeUrl}#terms`,
        name: "Image formats HeicSave converts",
        hasDefinedTerm: AI_DEFINED_TERMS.map((term) => ({
          "@type": "DefinedTerm",
          name: term.name,
          description: term.description,
          url: `${SITE_URL}${term.urlPath}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${homeUrl}#faq`,
        mainEntity: HOME_FAQ_BY_LOCALE[locale].map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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
