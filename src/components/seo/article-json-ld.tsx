import type { BlogPost } from "@/lib/blog-posts";
import { hasBlogTranslation } from "@/lib/blog-l10n";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/constants";
import { absoluteUrl } from "@/lib/locale-path";

const IN_LANGUAGE: Record<AppLocale, string> = {
  en: "en-US",
  de: "de-DE",
  fr: "fr-FR",
};

export function ArticleJsonLd({
  post,
  locale,
  slug,
}: {
  post: BlogPost;
  locale: AppLocale;
  slug: string;
}) {
  const schemaLocale =
    locale !== routing.defaultLocale && !hasBlogTranslation(slug, locale)
      ? routing.defaultLocale
      : locale;
  const url = absoluteUrl(`/blog/${post.slug}`, schemaLocale);

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/", routing.defaultLocale),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/", routing.defaultLocale),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: `${absoluteUrl("/", routing.defaultLocale).replace(/\/$/, "")}/og.png`,
    inLanguage: IN_LANGUAGE[schemaLocale],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article p"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
    />
  );
}
