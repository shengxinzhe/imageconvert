import type { ToolConfig } from "@/lib/tools-config";

/** Short label for nav cards (strip marketing suffix after em dash). */
export function toolShortTitle(tool: ToolConfig): string {
  const part = tool.title.split("—")[0]?.trim();
  return part || tool.title;
}
