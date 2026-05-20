import type { AppLocale } from "@/i18n/routing";
import type { ToolConfig } from "@/lib/tools-config";
import { absoluteUrl } from "@/lib/locale-path";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const SCHEMA_LANG: Record<AppLocale, string> = {
  en: "en-US",
  de: "de-DE",
  fr: "fr-FR",
};

export function ToolJsonLd({ tool, locale }: { tool: ToolConfig; locale: AppLocale }) {
  const pageUrl = absoluteUrl(`/${tool.slug}`, locale);

  const webApplication = {
    "@type": "WebApplication",
    "@id": `${pageUrl}#app`,
    name: tool.title.replace(" — Free & Online", ""),
    url: pageUrl,
    description: tool.metaDescription,
    inLanguage: SCHEMA_LANG[locale],
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Works in Chrome, Edge, Safari, and Firefox.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
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

  const graph = {
    "@context": "https://schema.org",
    "@graph": [webApplication, howTo, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
