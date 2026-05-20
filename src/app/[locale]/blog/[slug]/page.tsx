import { BlogMarkdown } from "@/components/blog/blog-markdown";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";
import { Link } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import { getT } from "@/lib/i18n/translations";
import { blogPostMetadata } from "@/lib/site-metadata";
import { notFound } from "next/navigation";

type PageProps = { params: { locale: string; slug: string } };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const locale = params.locale as AppLocale;
  return blogPostMetadata(post, locale);
}

export default function BlogPostPage({ params }: PageProps) {
  const locale = params.locale as AppLocale;
  const t = getT(locale);
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
      <ArticleJsonLd post={post} />
      <Link href="/blog" className="text-sm font-medium text-link hover:text-link-deep">
        {t("blog.back")}
      </Link>
      {locale !== "en" ? (
        <p className="mt-4 rounded-vercel border border-hairline bg-canvas-soft px-4 py-3 text-sm text-body">
          {t("blog.englishNotice")}
        </p>
      ) : null}
      <h1 className="mt-6 text-3xl font-semibold tracking-display-sm text-ink">{post.title}</h1>
      <p className="mt-3 font-mono text-xs text-mute">
        {post.publishedAt} · {post.readMinutes} min read
      </p>
      <div className="mt-10">
        <BlogMarkdown content={post.content} />
      </div>
    </article>
  );
}
