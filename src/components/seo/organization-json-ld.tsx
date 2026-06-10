import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { SITE_AI_SUMMARY } from "@/lib/ai-discovery";
import { getSchemaCopy } from "@/lib/schema-l10n";
import { absoluteUrl } from "@/lib/locale-path";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

/** Site-wide Organization schema for pages without dedicated JSON-LD. */
export function OrganizationJsonLd({
  locale = routing.defaultLocale,
}: {
  locale?: AppLocale;
}) {
  const schema = getSchemaCopy(locale);

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_AI_SUMMARY.tagline,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/apple-touch-icon.png`,
      width: 180,
      height: 180,
    },
    knowsAbout: schema.knowsAbout,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: absoluteUrl("/contact", locale),
        availableLanguage: schema.contactLanguages,
      },
    ],
    subjectOf: [
      { "@type": "CreativeWork", name: "LLM site summary", url: `${SITE_URL}/llms.txt` },
      { "@type": "CreativeWork", name: "LLM full catalog", url: `${SITE_URL}/llms-full.txt` },
      { "@type": "DataFeed", name: "AI discovery JSON", url: `${SITE_URL}/ai.json` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
