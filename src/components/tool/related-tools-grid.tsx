import { HomeToolCard } from "@/components/site/home-tool-card";
import type { AppLocale } from "@/i18n/routing";
import { getLocalizedToolBySlug } from "@/lib/get-localized-tool";
import { getToolAudience } from "@/lib/design-variants";

export function RelatedToolsGrid({
  slugs,
  locale,
}: {
  slugs: string[];
  locale: AppLocale;
}) {
  const tools = slugs
    .map((slug) => getLocalizedToolBySlug(slug, locale))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));

  if (!tools.length) return null;

  return (
    <div className="not-prose mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <HomeToolCard
          key={tool.slug}
          tool={tool}
          locale={locale}
          variant={getToolAudience(tool.slug) === "heic" ? "heic" : "developer"}
        />
      ))}
    </div>
  );
}
