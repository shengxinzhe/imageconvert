import { ToolLandingPage } from "@/components/tool-landing-page";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getLocalizedTool } from "@/lib/get-localized-tool";
import { toolMetadata } from "@/lib/metadata";
import type { ToolSlug } from "@/lib/tools-config";

type PageProps = { params: { locale: string } };

function parseLocale(raw: string): AppLocale {
  if (routing.locales.includes(raw as AppLocale)) return raw as AppLocale;
  return routing.defaultLocale;
}

export function createToolPage(slug: ToolSlug) {
  return {
    generateMetadata: ({ params }: PageProps) => {
      const locale = parseLocale(params.locale);
      const tool = getLocalizedTool(slug, locale);
      return toolMetadata(tool, locale);
    },
    Page: function ToolPage({ params }: PageProps) {
      const locale = parseLocale(params.locale);
      const tool = getLocalizedTool(slug, locale);
      return <ToolLandingPage tool={tool} locale={locale} />;
    },
  };
}
