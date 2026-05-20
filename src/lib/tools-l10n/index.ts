import type { AppLocale } from "@/i18n/routing";
import { deTools } from "@/lib/tools-l10n/de";
import { frTools } from "@/lib/tools-l10n/fr";
import type { ToolSlug } from "@/lib/tools-config";
import type { ToolLocaleFields } from "@/lib/tools-l10n/types";

export const toolTranslations: Record<
  Exclude<AppLocale, "en">,
  Record<ToolSlug, ToolLocaleFields>
> = {
  de: deTools,
  fr: frTools,
};
