import Link from "next/link";
import { toolList } from "@/lib/tools-config";
import { blogPosts } from "@/lib/blog-posts";
import { ArrowRight, Lock, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="mesh-hero border-b border-hairline">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28 lg:px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-mute">
            Private · Browser-local · Free
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-display text-ink md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Convert HEIC, WebP & AVIF — without uploading your photos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
            Modern image formats save space—but break compatibility. ImageConvert runs
            entirely in your browser for iPhone HEIC, web WebP, and next-gen AVIF.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/heic-to-jpg"
              className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-[#333]"
            >
              HEIC to JPG
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/avif-to-jpg"
              className="inline-flex h-12 items-center rounded-full border border-hairline bg-canvas px-6 text-sm font-medium text-ink transition-colors hover:bg-canvas-soft"
            >
              AVIF to JPG
            </Link>
          </div>
          <ul className="mx-auto mt-14 flex max-w-lg flex-wrap justify-center gap-8 text-sm text-body">
            <li className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-ink" aria-hidden />
              Files stay on device
            </li>
            <li className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-ink" aria-hidden />
              Batch up to 5 images
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-canvas-soft py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-mute">Converters</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-display-sm text-ink md:text-3xl">
            All tools
          </h2>
          <p className="mt-2 max-w-xl text-body">
            Eight landing pages, cross-linked for discoverability and SEO.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {toolList.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.path}
                className="group rounded-vercel-lg border border-hairline bg-canvas p-5 shadow-card transition hover:shadow-card-hover"
              >
                <h3 className="font-medium capitalize text-ink group-hover:text-link">
                  {tool.slug.replace(/-/g, " ")}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-body">
                  {tool.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-mute">Guides</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-display-sm text-ink">Blog</h2>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {blogPosts.slice(0, 4).map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-vercel-lg border border-hairline bg-canvas p-5 shadow-card transition hover:shadow-card-hover"
              >
                <h3 className="font-medium text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-body">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center text-sm font-medium text-link hover:text-link-deep"
        >
          View all articles
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
