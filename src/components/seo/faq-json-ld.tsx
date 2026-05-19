import type { FaqItem } from "@/lib/tools-config";

export function FaqJsonLd({ faqs, url }: { faqs: FaqItem[]; url: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...data, url }) }}
    />
  );
}
