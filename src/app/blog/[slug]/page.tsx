import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogMarkdown } from "@/components/blog/blog-markdown";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import { blogPostMetadata } from "@/lib/site-metadata";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return blogPostMetadata(post);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
      <ArticleJsonLd post={post} />
      <Link href="/blog" className="text-sm font-medium text-link hover:text-link-deep">
        ← Blog
      </Link>
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
