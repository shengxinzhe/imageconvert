import Link from "next/link";
import { WebsiteJsonLd } from "@/components/seo/website-json-ld";
import { toolList } from "@/lib/tools-config";
import { blogPosts } from "@/lib/blog-posts";
import { audienceStyles, getToolAudience, homeStyles } from "@/lib/design-variants";
import { homeMetadata } from "@/lib/site-metadata";
import { ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = homeMetadata;

const heicTools = toolList.filter((t) => getToolAudience(t.slug) === "heic");
const devTools = toolList.filter((t) => getToolAudience(t.slug) === "developer");

export default function HomePage() {
  return (
    <>
      <WebsiteJsonLd />
      {/* HEIC / Apple-adjacent hero */}
      <section className={homeStyles.heicSection}>
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28 lg:px-6">
          <span
            className={cn(
              "inline-flex rounded-full border px-3 py-1 text-xs font-medium",
              audienceStyles.heic.badge
            )}
          >
            iPhone & iPad photos
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-display text-ink md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Convert HEIC to JPG — without uploading your photos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
            Apple&apos;s default format doesn&apos;t work everywhere. Convert locally in
            your browser—private, free, and instant for Windows, Mac, and sharing.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/heic-to-jpg" className={cn("inline-flex h-12 items-center px-6 text-sm font-medium", homeStyles.heicCta)}>
              HEIC to JPG
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/heic-to-png"
              className="inline-flex h-12 items-center rounded-full border border-hairline bg-canvas px-6 text-sm font-medium text-ink hover:bg-canvas-soft"
            >
              HEIC to PNG
            </Link>
          </div>
          <ul className="mx-auto mt-14 flex max-w-lg flex-wrap justify-center gap-8 text-sm text-body">
            <li className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-ink" aria-hidden />
              Files stay on device
            </li>
          </ul>
        </div>
      </section>

      {/* Developer / Linear-adjacent tools */}
      <section className={homeStyles.devSection}>
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
          <span className={homeStyles.devBadge}>WebP · AVIF · optimize</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-display-sm text-ink md:text-3xl">
            Developer converters
          </h2>
          <p className="mt-2 max-w-xl text-body">
            WebP and AVIF for modern sites—convert locally before deploy or share.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {devTools.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.path}
                className="group rounded-vercel-lg border border-hairline bg-canvas p-5 shadow-card transition hover:border-[#c4c4ef] hover:shadow-card-hover"
              >
                <p className="font-mono text-xs text-[#5e6ad2]">{tool.from} → {tool.to}</p>
                <h3 className="mt-2 font-medium capitalize text-ink group-hover:text-[#5e6ad2]">
                  {tool.slug.replace(/-/g, " ")}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HEIC tools grid */}
      <section className="content-band-soft py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="text-xl font-semibold text-ink">iPhone photo tools</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {heicTools.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.path}
                className={cn("p-5 transition hover:shadow-card-hover", audienceStyles.heic.card)}
              >
                <h3 className="font-medium capitalize text-ink">{tool.slug.replace(/-/g, " ")}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-body">{tool.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Mintlify-adjacent */}
      <section className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-mute">Guides</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-display-sm text-ink">Blog</h2>
        <p className="mt-2 text-body">HEIC, WebP, and AVIF guides for search and sharing.</p>
        <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
          {blogPosts.slice(0, 4).map((post) => (
            <li key={post.slug} className="py-6">
              <Link href={`/blog/${post.slug}`} className="group block">
                <h3 className="font-medium text-ink group-hover:text-[var(--mintlify-green)]">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-body">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center text-sm font-medium text-[var(--mintlify-green)] hover:underline"
        >
          View all articles
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
