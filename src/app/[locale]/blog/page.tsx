import type { Metadata } from "next";
import { BlogIndexJsonLd } from "@/components/seo/blog-index-json-ld";
import { Link } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { getLocalizedBlogPostsNewestFirst } from "@/lib/blog-l10n";
import { SITE_NAME } from "@/lib/constants";
import { getT } from "@/lib/i18n/translations";
import { OG_IMAGE } from "@/lib/site-metadata";
import { absoluteUrl, getOgLocale, hreflangLanguages } from "@/lib/locale-path";

type PageProps = { params: { locale: string } };

const BLOG_META: Record<AppLocale, { title: string; description: string }> = {
  en: {
    title: "Blog — HEIC, WebP & AVIF Guides",
    description:
      "Guides on HEIC, WebP, AVIF, iPhone photos, Windows compatibility, and private browser conversion.",
  },
  de: {
    title: "Blog — HEIC-, WebP- & AVIF-Ratgeber",
    description:
      "Ratgeber zu HEIC, WebP, AVIF, iPhone-Fotos und privater Browser-Konvertierung — auch auf Deutsch.",
  },
  fr: {
    title: "Blog — guides HEIC, WebP et AVIF",
    description:
      "Guides HEIC, WebP, AVIF, photos iPhone et conversion privée dans le navigateur — aussi en français.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = params.locale as AppLocale;
  const { title, description } = BLOG_META[locale];
  const url = absoluteUrl("/blog", locale);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: hreflangLanguages("/blog"),
    },
    openGraph: {
      type: "website",
      locale: getOgLocale(locale),
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
  };
}

export default function BlogIndexPage({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const t = getT(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
      <BlogIndexJsonLd locale={locale} />
      <p className="font-mono text-xs uppercase tracking-wider text-mute">{t("home.blogLabel")}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-display-sm text-ink">{t("home.blogTitle")}</h1>
      <p className="mt-3 text-body">
        {t("home.blogSubtitle")} · {SITE_NAME}
      </p>
      <ul className="mt-12 divide-y divide-hairline border-y border-hairline">
        {getLocalizedBlogPostsNewestFirst(locale).map((post) => (
          <li key={post.slug} className="py-8 first:pt-8">
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2 className="text-xl font-medium text-ink group-hover:text-link">
                {post.title}
              </h2>
              <p className="mt-2 text-body">{post.description}</p>
              <p className="mt-3 font-mono text-xs text-mute">
                {post.publishedAt} · {post.readMinutes} {t("blog.minRead")}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
