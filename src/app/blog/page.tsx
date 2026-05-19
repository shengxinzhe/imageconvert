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
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Long-tail guides for {SITE_NAME} — traffic and internal links to our free tools.
      </p>
      <ul className="mt-10 space-y-6">
        {blogPosts.map((post) => (
          <li key={post.slug} className="border-b border-slate-200 pb-6 dark:border-slate-800">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:text-emerald-600">{post.title}</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{post.description}</p>
              <p className="mt-2 text-xs text-slate-500">
                {post.publishedAt} · {post.readMinutes} min read
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
