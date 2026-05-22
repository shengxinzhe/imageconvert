import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getLocalizedBlogPost } from "@/lib/blog-l10n";
import { getT } from "@/lib/i18n/translations";

export function RelatedGuides({
  slugs,
  locale,
}: {
  slugs: string[];
  locale: AppLocale;
}) {
  const t = getT(locale);
  const posts = slugs
    .map((slug) => getLocalizedBlogPost(slug, locale))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (!posts.length) return null;

  return (
    <div className="not-prose mt-12">
      <h2 className="text-xl font-semibold tracking-display-sm text-ink">
        {t("tool.relatedGuidesHeading")}
      </h2>
      <ul className="mt-4 space-y-3">
        {posts.map((post) => (
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
    </div>
  );
}
