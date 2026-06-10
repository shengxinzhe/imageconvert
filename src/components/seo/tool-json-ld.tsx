import { routing, type AppLocale } from "@/i18n/routing";
import type { ToolConfig } from "@/lib/tools-config";
import { absoluteUrl } from "@/lib/locale-path";
import {
  getSchemaCopy,
  SCHEMA_LANG,
  SCHEMA_PRICE_CURRENCY,
} from "@/lib/schema-l10n";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

function schemaAppName(tool: ToolConfig): string {
  const dash = tool.title.indexOf(" — ");
  return dash >= 0 ? tool.title.slice(0, dash) : tool.title;
}

export function ToolJsonLd({ tool, locale }: { tool: ToolConfig; locale: AppLocale }) {
  const pageUrl = absoluteUrl(`/${tool.slug}`, locale);
  const appName = schemaAppName(tool);
  const copy = getSchemaCopy(locale);
  const fromLabel = tool.from.toUpperCase();
  const toLabel = tool.to.toUpperCase();

  const webApplication = {
    "@type": "WebApplication",
    "@id": `${pageUrl}#app`,
    name: appName,
    url: pageUrl,
    description: tool.metaDescription,
    inLanguage: SCHEMA_LANG[locale],
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    browserRequirements: copy.browserRequirements,
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: SCHEMA_PRICE_CURRENCY[locale],
      availability: "https://schema.org/InStock",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article h1 + p", "article details p"],
    },
    featureList: copy.featureList,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const howTo = {
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: copy.howToName(fromLabel, toLabel),
    description: tool.heroSubtitle,
    step: tool.howToSteps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: copy.stepName(index + 1),
      text,
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: tool.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const homeUrl =
    locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`;

  const breadcrumbs = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy.homeBreadcrumb,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: appName,
        item: pageUrl,
      },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [webApplication, howTo, faqPage, breadcrumbs],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
