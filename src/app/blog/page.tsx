import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog — HEIC, WebP & AVIF Guides`,
  description:
    "Guides on HEIC, WebP, AVIF, iPhone photos, Windows compatibility, and private browser conversion.",
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
      <p className="font-mono text-xs uppercase tracking-wider text-mute">Guides</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-display-sm text-ink">Blog</h1>
      <p className="mt-3 text-body">
        Long-tail guides for {SITE_NAME} — traffic and internal links to our free tools.
      </p>
      <ul className="mt-12 divide-y divide-hairline border-y border-hairline">
        {blogPosts.map((post) => (
          <li key={post.slug} className="py-8 first:pt-8">
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2 className="text-xl font-medium text-ink group-hover:text-link">
                {post.title}
              </h2>
              <p className="mt-2 text-body">{post.description}</p>
              <p className="mt-3 font-mono text-xs text-mute">
                {post.publishedAt} · {post.readMinutes} min read
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
