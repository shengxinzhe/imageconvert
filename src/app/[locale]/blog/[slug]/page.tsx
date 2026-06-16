import { BlogAuthorByline } from "@/components/blog/blog-author-byline";
import { BlogMarkdown } from "@/components/blog/blog-markdown";
import { BlogPostFooter } from "@/components/blog/blog-post-footer";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";
import { Link } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { blogPosts } from "@/lib/blog-posts";
import {
  getLocalizedBlogPost,
  hasBlogTranslation,
} from "@/lib/blog-l10n";
import { getT } from "@/lib/i18n/translations";
import { blogPostMetadata } from "@/lib/site-metadata";
import { notFound } from "next/navigation";

type PageProps = { params: { locale: string; slug: string } };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts
      .filter(
        (post) =>
          locale === routing.defaultLocale ||
          hasBlogTranslation(post.slug, locale)
      )
      .map((post) => ({ locale, slug: post.slug }))
  );
}

export function generateMetadata({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const post = getLocalizedBlogPost(params.slug, locale);
  if (!post) return {};
  return blogPostMetadata(post, locale);
}

export default function BlogPostPage({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const t = getT(locale);
  const post = getLocalizedBlogPost(params.slug, locale);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
      <ArticleJsonLd post={post} locale={locale} slug={params.slug} />
      <Link href="/blog" className="text-sm font-medium text-link hover:text-link-deep">
        {t("blog.back")}
      </Link>
      {locale !== "en" && !hasBlogTranslation(params.slug, locale) ? (
        <p className="mt-4 rounded-vercel border border-hairline bg-canvas-soft px-4 py-3 text-sm text-body">
          {t("blog.englishNotice")}
        </p>
      ) : null}
      <h1 className="mt-6 text-3xl font-semibold tracking-display-sm text-ink">{post.title}</h1>
      <p className="mt-3 font-mono text-xs text-mute">
        {post.publishedAt}
        {post.updatedAt && post.updatedAt !== post.publishedAt
          ? ` · ${t("blog.updated")} ${post.updatedAt}`
          : null}
        {" · "}
        {post.readMinutes} {t("blog.minRead")}
      </p>
      <BlogAuthorByline locale={locale} />
      <div className="mt-10">
        <BlogMarkdown content={post.content} locale={locale} />
      </div>
      <BlogPostFooter slug={params.slug} locale={locale} />
    </article>
  );
}
