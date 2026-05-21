import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { deLegal } from "@/lib/legal-l10n/de";
import { enLegal } from "@/lib/legal-l10n/en";
import { frLegal } from "@/lib/legal-l10n/fr";
import type { LegalCatalog, LegalPageContent, LegalPageId } from "@/lib/legal-l10n/types";

const catalogs: Record<AppLocale, LegalCatalog> = {
  en: enLegal,
  de: deLegal,
  fr: frLegal,
};

export function getLegalPage(
  pageId: LegalPageId,
  locale: AppLocale
): LegalPageContent {
  const loc = routing.locales.includes(locale) ? locale : routing.defaultLocale;
  return catalogs[loc][pageId];
}
