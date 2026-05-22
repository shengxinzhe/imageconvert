import type { AppLocale } from "@/i18n/routing";
import { SOFT_WARN_BATCH_COUNT, SOFT_WARN_FILE_SIZE } from "@/lib/constants";
import { getT } from "@/lib/i18n/translations";

export function getConverterSoftWarnings(
  files: File[],
  locale: AppLocale,
): string[] {
  const t = getT(locale);
  const warnings: string[] = [];
  const mb = Math.round(SOFT_WARN_FILE_SIZE / 1024 / 1024);

  if (files.length > SOFT_WARN_BATCH_COUNT) {
    warnings.push(t("warnings.largeBatch", { count: files.length }));
  }

  const largeFiles = files.filter((f) => f.size > SOFT_WARN_FILE_SIZE);
  if (largeFiles.length === 1) {
    warnings.push(
      t("warnings.largeFileOne", { name: largeFiles[0].name, mb }),
    );
  } else if (largeFiles.length > 1) {
    warnings.push(
      t("warnings.largeFileMany", { count: largeFiles.length, mb }),
    );
  }

  return warnings;
}
