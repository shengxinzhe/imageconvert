import type { BlogPost } from "@/lib/blog-posts";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export function ArticleJsonLd({ post }: { post: BlogPost }) {
  const url = `${SITE_URL}/blog/${post.slug}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: `${SITE_URL}/og.png`,
    inLanguage: "en-US",
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
