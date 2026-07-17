import type { BlogPost } from "@/lib/blog-posts";
import { hasBlogTranslation } from "@/lib/blog-l10n";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { AUTHOR_PATH, AUTHOR_PEN_NAME } from "@/lib/author";
import { SITE_NAME } from "@/lib/constants";
import { absoluteUrl } from "@/lib/locale-path";
import { getSchemaCopy, SCHEMA_LANG } from "@/lib/schema-l10n";

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
  const schema = getSchemaCopy(schemaLocale);
  const url = absoluteUrl(`/blog/${post.slug}`, schemaLocale);
  const homeUrl = absoluteUrl("/", schemaLocale);
  const blogUrl = absoluteUrl("/blog", schemaLocale);
  const siteRoot = absoluteUrl("/", routing.defaultLocale).replace(/\/$/, "");

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        author: {
          "@type": "Person",
          name: AUTHOR_PEN_NAME,
          url: absoluteUrl(AUTHOR_PATH, routing.defaultLocale),
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: absoluteUrl("/", routing.defaultLocale),
          logo: {
            "@type": "ImageObject",
            url: `${siteRoot}/apple-touch-icon.png`,
            width: 180,
            height: 180,
          },
        },
        isPartOf: {
          "@type": "Blog",
          "@id": `${blogUrl}#blog`,
          name: schema.blogIndexName(SITE_NAME),
          url: blogUrl,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        image: `${siteRoot}/og.png`,
        inLanguage: SCHEMA_LANG[schemaLocale],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["article h1", "article p"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: schema.homeBreadcrumb,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: schema.blogBreadcrumb,
            item: blogUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
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
