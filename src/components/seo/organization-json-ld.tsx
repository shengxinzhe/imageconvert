import { SITE_AI_SUMMARY } from "@/lib/ai-discovery";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

/** Site-wide Organization schema for pages without dedicated JSON-LD. */
export function OrganizationJsonLd() {
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
    knowsAbout: [
      "HEIC image conversion",
      "AVIF image conversion",
      "WebP image conversion",
      "Browser-local privacy-preserving image tools",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English", "German", "French"],
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
