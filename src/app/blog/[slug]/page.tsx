import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/seo/article-json-ld";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import { blogPostMetadata } from "@/lib/site-metadata";

function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split("\n\n");
  return (
    <div className="prose-mint">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return <h2 key={i}>{block.replace(/^## /, "")}</h2>;
        }
        if (block.startsWith("|")) {
          const rows = block.split("\n").filter((r) => r.trim());
          return (
            <table key={i} className="text-sm">
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri}>
                    {row
                      .split("|")
                      .filter((c) => c.trim())
                      .map((cell, ci) => (
                        <td key={ci} className="border border-hairline px-2 py-1">
                          {cell.trim()}
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }
        const withLinks = block.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2">$1</a>'
        );
        if (block.startsWith("- ")) {
          return (
            <ul key={i}>
              {block.split("\n").map((line) => (
                <li key={line} dangerouslySetInnerHTML={{ __html: line.replace(/^- /, "") }} />
              ))}
            </ul>
          );
        }
        return <p key={i} dangerouslySetInnerHTML={{ __html: withLinks }} />;
      })}
    </div>
  );
}

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
        <MarkdownContent content={post.content} />
      </div>
    </article>
  );
}
