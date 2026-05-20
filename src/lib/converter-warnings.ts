import { SOFT_WARN_BATCH_COUNT, SOFT_WARN_FILE_SIZE } from "@/lib/constants";

export function getConverterSoftWarnings(files: File[]): string[] {
  const warnings: string[] = [];

  if (files.length > SOFT_WARN_BATCH_COUNT) {
    warnings.push(
      `You selected ${files.length} files. Large batches can be slow or fail on phones—try a desktop browser or convert in smaller groups.`,
    );
  }

  const largeFiles = files.filter((f) => f.size > SOFT_WARN_FILE_SIZE);
  if (largeFiles.length > 0) {
    const mb = Math.round(SOFT_WARN_FILE_SIZE / 1024 / 1024);
    if (largeFiles.length === 1) {
      warnings.push(
        `"${largeFiles[0].name}" is over ${mb} MB. Heavy files use a lot of memory—desktop Chrome or Edge usually works best.`,
      );
    } else {
      warnings.push(
        `${largeFiles.length} files are over ${mb} MB each. Very large images may fail on mobile—use a desktop browser if conversion errors.`,
      );
    }
  }

  return warnings;
}
