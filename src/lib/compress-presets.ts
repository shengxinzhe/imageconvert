import type { ResizePresetId } from "@/lib/constants";

export type CompressSceneId = "email" | "form" | "document" | "social" | "max" | "custom";

export interface CompressScenePreset {
  id: Exclude<CompressSceneId, "custom">;
  qualityPercent: number;
  resizePreset: ResizePresetId;
}

export const COMPRESS_SCENE_PRESETS: CompressScenePreset[] = [
  { id: "email", qualityPercent: 75, resizePreset: "1920" },
  { id: "form", qualityPercent: 65, resizePreset: "1280" },
  { id: "document", qualityPercent: 82, resizePreset: "2048" },
  { id: "social", qualityPercent: 70, resizePreset: "1280" },
  { id: "max", qualityPercent: 55, resizePreset: "1280" },
];

export const DEFAULT_COMPRESS_SCENE_ID: Exclude<CompressSceneId, "custom"> = "form";

export function getCompressScene(
  id: Exclude<CompressSceneId, "custom">,
): CompressScenePreset {
  const scene = COMPRESS_SCENE_PRESETS.find((s) => s.id === id);
  if (!scene) throw new Error(`Unknown compress scene: ${id}`);
  return scene;
}
