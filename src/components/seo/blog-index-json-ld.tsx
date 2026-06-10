import type { AppLocale } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/constants";
import { getLocalizedBlogPostsNewestFirst } from "@/lib/blog-l10n";
import { absoluteUrl } from "@/lib/locale-path";
import { getSchemaCopy, SCHEMA_LANG } from "@/lib/schema-l10n";

export function BlogIndexJsonLd({ locale }: { locale: AppLocale }) {
  const blogUrl = absoluteUrl("/blog", locale);
  const posts = getLocalizedBlogPostsNewestFirst(locale);
  const schema = getSchemaCopy(locale);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${blogUrl}#collection`,
        url: blogUrl,
        name: schema.blogIndexName(SITE_NAME),
        description: schema.blogIndexDescription,
        inLanguage: SCHEMA_LANG[locale],
        isPartOf: { "@id": absoluteUrl("/", locale) },
        mainEntity: {
          "@type": "ItemList",
          "@id": `${blogUrl}#posts`,
          numberOfItems: posts.length,
          itemListElement: posts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(`/blog/${post.slug}`, locale),
            name: post.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${blogUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: schema.homeBreadcrumb,
            item: absoluteUrl("/", locale),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: schema.blogBreadcrumb,
            item: blogUrl,
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
