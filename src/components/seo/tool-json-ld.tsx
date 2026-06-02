import { routing, type AppLocale } from "@/i18n/routing";
import type { ToolConfig } from "@/lib/tools-config";
import { absoluteUrl } from "@/lib/locale-path";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const SCHEMA_LANG: Record<AppLocale, string> = {
  en: "en-US",
  de: "de-DE",
  fr: "fr-FR",
};

function schemaAppName(tool: ToolConfig): string {
  const dash = tool.title.indexOf(" — ");
  return dash >= 0 ? tool.title.slice(0, dash) : tool.title;
}

export function ToolJsonLd({ tool, locale }: { tool: ToolConfig; locale: AppLocale }) {
  const pageUrl = absoluteUrl(`/${tool.slug}`, locale);
  const appName = schemaAppName(tool);

  const webApplication = {
    "@type": "WebApplication",
    "@id": `${pageUrl}#app`,
    name: appName,
    url: pageUrl,
    description: tool.metaDescription,
    inLanguage: SCHEMA_LANG[locale],
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Works in Chrome, Edge, Safari, and Firefox.",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article h1 + p", "article details p"],
    },
    featureList: [
      "Client-side conversion (no upload)",
      "Batch conversion with ZIP download",
      "Adjustable JPEG/WebP quality",
      "Free to use",
      "No account required",
    ],
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const howTo = {
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: `How to convert ${tool.from.toUpperCase()} to ${tool.to.toUpperCase()}`,
    description: tool.heroSubtitle,
    step: tool.howToSteps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
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
        name: "Home",
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
