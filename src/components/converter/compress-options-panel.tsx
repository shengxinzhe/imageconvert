"use client";

import { useParams } from "next/navigation";
import {
  COMPRESS_SCENE_PRESETS,
  getCompressScene,
  type CompressSceneId,
} from "@/lib/compress-presets";
import { RESIZE_PRESETS, type ResizePresetId } from "@/lib/constants";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getT } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";
import { Mail, FileText, MessageCircle, Minimize2, ScanLine } from "lucide-react";

const SCENE_ICONS = {
  email: Mail,
  form: FileText,
  document: ScanLine,
  social: MessageCircle,
  max: Minimize2,
} as const;

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

interface CompressOptionsPanelProps {
  qualityPercent: number;
  onQualityChange: (value: number) => void;
  resizePreset: ResizePresetId;
  onResizeChange: (value: ResizePresetId) => void;
  activeScene: CompressSceneId;
  onSceneSelect: (scene: Exclude<CompressSceneId, "custom">) => void;
  selectedFileCount?: number;
  selectedTotalBytes?: number;
  disabled?: boolean;
}

export function CompressOptionsPanel({
  qualityPercent,
  onQualityChange,
  resizePreset,
  onResizeChange,
  activeScene,
  onSceneSelect,
  selectedFileCount = 0,
  selectedTotalBytes = 0,
  disabled,
}: CompressOptionsPanelProps) {
  const params = useParams();
  const locale = (routing.locales.includes(params.locale as AppLocale)
    ? params.locale
    : routing.defaultLocale) as AppLocale;
  const t = getT(locale);

  const maxWidth =
    RESIZE_PRESETS.find((p) => p.id === resizePreset)?.maxWidth ?? null;
  const maxWidthLabel =
    maxWidth === null
      ? t("converter.resizePreset.original")
      : t(`converter.resizePreset.${resizePreset}`);

  return (
    <section
      className="space-y-5 rounded-vercel-lg border-2 border-ink/10 bg-canvas p-4 sm:p-5"
      aria-label={t("compress.optionsTitle")}
    >
      <div>
        <h2 className="text-base font-semibold text-ink">{t("compress.optionsTitle")}</h2>
        <p className="mt-1 text-sm text-body">{t("compress.optionsSubtitle")}</p>
      </div>

      <div className="rounded-vercel border border-hairline bg-canvas-soft px-3 py-2.5 sm:px-4">
        <p className="text-xs font-medium uppercase tracking-wide text-mute">
          {t("compress.currentSettings")}
        </p>
        <p className="mt-1 text-sm font-medium text-ink">
          {t("compress.settingsSummary", {
            quality: qualityPercent,
            width: maxWidthLabel,
          })}
        </p>
        {activeScene !== "custom" ? (
          <p className="mt-0.5 text-xs text-body">
            {t(`compress.scene.${activeScene}.hint`)}
          </p>
        ) : (
          <p className="mt-0.5 text-xs text-body">{t("compress.customHint")}</p>
        )}
        {selectedFileCount > 0 ? (
          <p className="mt-2 font-mono text-xs text-mute">
            {t("compress.selectedSize", {
              count: selectedFileCount,
              size: formatBytes(selectedTotalBytes),
            })}
          </p>
        ) : null}
      </div>

      <div>
        <p className="text-sm font-medium text-ink">{t("compress.sceneTitle")}</p>
        <p className="mt-1 text-xs text-mute">{t("compress.sceneSubtitle")}</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {COMPRESS_SCENE_PRESETS.map((scene) => {
            const Icon = SCENE_ICONS[scene.id];
            const selected = activeScene === scene.id;
            return (
              <button
                key={scene.id}
                type="button"
                disabled={disabled}
                onClick={() => onSceneSelect(scene.id)}
                className={cn(
                  "flex items-start gap-3 rounded-vercel border px-3 py-3 text-left transition-colors",
                  selected
                    ? "border-ink bg-ink text-white"
                    : "border-hairline bg-canvas-soft text-ink hover:border-ink/30 hover:bg-canvas-soft-2",
                  disabled && "opacity-50",
                )}
              >
                <Icon
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0",
                    selected ? "text-white" : "text-ink",
                  )}
                  aria-hidden
                />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">
                    {t(`compress.scene.${scene.id}.title`)}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block text-xs leading-snug",
                      selected ? "text-white/80" : "text-body",
                    )}
                  >
                    {t(`compress.scene.${scene.id}.desc`)}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block font-mono text-[10px]",
                      selected ? "text-white/70" : "text-mute",
                    )}
                  >
                    {t("compress.scenePresetValues", {
                      quality: scene.qualityPercent,
                      width: t(`converter.resizePreset.${scene.resizePreset}`),
                    })}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-vercel border border-hairline bg-canvas-soft px-4 py-4">
        <div className="flex items-end justify-between gap-3">
          <label htmlFor="compress-quality" className="text-sm font-medium text-ink">
            {t("compress.qualityLabel")}
          </label>
          <span className="font-mono text-2xl font-semibold tabular-nums text-ink">
            {qualityPercent}
            <span className="text-base font-medium text-mute">%</span>
          </span>
        </div>
        <input
          id="compress-quality"
          type="range"
          min={50}
          max={100}
          step={1}
          value={qualityPercent}
          disabled={disabled}
          onChange={(e) => onQualityChange(Number(e.target.value))}
          className="mt-4 h-2.5 w-full cursor-pointer appearance-none rounded-full bg-hairline accent-ink disabled:opacity-50"
        />
        <div className="mt-2 flex justify-between text-[11px] text-mute">
          <span>{t("compress.qualitySmaller")}</span>
          <span>{t("compress.qualityBalanced")}</span>
          <span>{t("compress.qualitySharper")}</span>
        </div>
        <p className="mt-3 text-xs text-body">{t("compress.qualityHelp")}</p>
      </div>

      <div className="rounded-vercel border border-hairline bg-canvas-soft px-4 py-4">
        <p className="text-sm font-medium text-ink">{t("compress.widthLabel")}</p>
        <p className="mt-1 text-xs text-body">{t("compress.widthHelp")}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {RESIZE_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              disabled={disabled}
              onClick={() => onResizeChange(preset.id)}
              className={cn(
                "min-w-[5.5rem] rounded-vercel border px-3 py-2 text-left transition-colors",
                resizePreset === preset.id
                  ? "border-ink bg-ink text-white"
                  : "border-hairline bg-canvas text-body hover:bg-canvas-soft-2",
                disabled && "opacity-50",
              )}
            >
              <span className="block text-xs font-medium">
                {t(`converter.resizePreset.${preset.id}`)}
              </span>
              {preset.maxWidth ? (
                <span
                  className={cn(
                    "mt-0.5 block font-mono text-[10px]",
                    resizePreset === preset.id ? "text-white/75" : "text-mute",
                  )}
                >
                  {t("compress.maxWidthPx", { px: preset.maxWidth })}
                </span>
              ) : (
                <span
                  className={cn(
                    "mt-0.5 block text-[10px]",
                    resizePreset === preset.id ? "text-white/75" : "text-mute",
                  )}
                >
                  {t("compress.fullResolution")}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function applyCompressScene(
  sceneId: Exclude<CompressSceneId, "custom">,
): { qualityPercent: number; resizePreset: ResizePresetId } {
  const scene = getCompressScene(sceneId);
  return {
    qualityPercent: scene.qualityPercent,
    resizePreset: scene.resizePreset,
  };
}
