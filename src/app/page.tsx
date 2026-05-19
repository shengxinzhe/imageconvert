import Link from "next/link";
import { toolList } from "@/lib/tools-config";
import { blogPosts } from "@/lib/blog-posts";
import { Shield, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
          Private · Browser-local · Free
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Convert HEIC, WebP & AVIF — Without Uploading Your Photos
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Modern image formats save space—but break compatibility. ImageConvert runs
          entirely in your browser for iPhone HEIC, web WebP, and next-gen AVIF. GDPR-friendly,
          zero server image processing.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/heic-to-jpg"
            className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700"
          >
            HEIC to JPG
          </Link>
          <Link
            href="/avif-to-jpg"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-900"
          >
            AVIF to JPG
          </Link>
        </div>
        <ul className="mx-auto mt-12 flex max-w-xl flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
          <li className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-emerald-600" />
            Files stay on your device
          </li>
          <li className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            Batch up to 5 images
          </li>
        </ul>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">All converters</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Eight tools, eight SEO landing pages—cross-linked for discoverability.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toolList.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.path}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-950 dark:hover:border-emerald-700"
              >
                <h3 className="font-semibold capitalize text-slate-900 dark:text-white">
                  {tool.slug.replace(/-/g, " ")}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                  {tool.metaDescription}
                </p>
              </Link>
            ))}
          </div>
          </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Guides & blog</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {blogPosts.slice(0, 4).map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-slate-200 p-4 hover:border-emerald-300 dark:border-slate-700"
              >
                <h3 className="font-medium">{post.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="mt-6 inline-block text-sm font-medium text-emerald-600 hover:underline">
          View all articles →
        </Link>
      </section>
    </>
  );
}
