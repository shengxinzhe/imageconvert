import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { blogPrimaryTool, getRelatedBlogPosts } from "@/lib/blog-seo-links";
import { getLocalizedToolBySlug } from "@/lib/get-localized-tool";
import { getT } from "@/lib/i18n/translations";
import { toolShortTitle } from "@/lib/tool-display";

export function BlogPostFooter({
  slug,
  locale,
}: {
  slug: string;
  locale: AppLocale;
}) {
  const t = getT(locale);
  const toolSlug = blogPrimaryTool[slug];
  const tool = toolSlug ? getLocalizedToolBySlug(toolSlug, locale) : null;
  const related = getRelatedBlogPosts(slug, locale);

  if (!tool && !related.length) return null;

  return (
    <footer className="not-prose mt-14 border-t border-hairline pt-10">
      {tool ? (
        <section aria-labelledby="blog-tool-cta">
          <h2 id="blog-tool-cta" className="text-xl font-semibold tracking-display-sm text-ink">
            {t("blog.tryToolHeading")}
          </h2>
          <p className="mt-2 text-body">{tool.metaDescription}</p>
          <Link
            href={`/${tool.slug}`}
            className="mt-4 inline-flex h-11 items-center rounded-full bg-[var(--mintlify-green)] px-5 text-sm font-medium text-white hover:opacity-90"
          >
            {t("blog.tryToolCta", { tool: toolShortTitle(tool) })}
          </Link>
        </section>
      ) : null}
      {related.length > 0 ? (
        <section className={tool ? "mt-10" : undefined} aria-labelledby="blog-related">
          <h2 id="blog-related" className="text-xl font-semibold tracking-display-sm text-ink">
            {t("blog.relatedHeading")}
          </h2>
          <ul className="mt-4 space-y-3">
            {related.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium text-link hover:text-link-deep"
                >
                  {post.title}
                </Link>
                <p className="mt-1 text-sm text-body">{post.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </footer>
  );
}
