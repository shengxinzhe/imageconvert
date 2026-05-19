import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/constants";
// Simple markdown renderer
function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split("\n\n");
  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
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
                        <td key={ci} className="border px-2 py-1">
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
          '<a href="$2" class="text-emerald-600 hover:underline">$1</a>'
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
        return (
          <p key={i} dangerouslySetInnerHTML={{ __html: withLinks }} />
        );
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
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="text-sm text-emerald-600 hover:underline">
        ← Blog
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
      <p className="mt-2 text-sm text-slate-500">
        {post.publishedAt} · {post.readMinutes} min read
      </p>
      <div className="mt-8">
        <MarkdownContent content={post.content} />
      </div>
    </article>
  );
}
