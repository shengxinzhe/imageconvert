import type { AppLocale } from "@/i18n/routing";
import {
  AI_DEFINED_TERMS,
  AI_GUIDE_CATALOG,
  AI_TOOL_CATALOG,
  HOME_FAQ_BY_LOCALE,
  SITE_AI_SUMMARY,
} from "@/lib/ai-discovery";
import { absoluteUrl } from "@/lib/locale-path";
import { getSchemaCopy, SCHEMA_LANG } from "@/lib/schema-l10n";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const SITE_DESCRIPTION: Record<AppLocale, string> = {
  en: "Free online image converters for HEIC, WebP, and AVIF. Files never leave your browser.",
  de: "Kostenlose Online-Bildkonverter für HEIC, WebP und AVIF. Dateien bleiben in Ihrem Browser.",
  fr: "Convertisseurs d'images en ligne gratuits pour HEIC, WebP et AVIF. Les fichiers restent dans votre navigateur.",
};

export function WebsiteJsonLd({ locale }: { locale: AppLocale }) {
  const homeUrl = absoluteUrl("/", locale);
  const schema = getSchemaCopy(locale);

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
        knowsAbout: schema.knowsAbout,
      },
      {
        "@type": "ItemList",
        "@id": `${homeUrl}#tools`,
        name: schema.toolsListName,
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
        "@type": "ItemList",
        "@id": `${homeUrl}#guides`,
        name: schema.guidesListName,
        numberOfItems: AI_GUIDE_CATALOG.length,
        itemListElement: AI_GUIDE_CATALOG.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.title,
          url: absoluteUrl(`/blog/${guide.slug}`, locale),
        })),
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${homeUrl}#terms`,
        name: schema.definedTermsSetName,
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
