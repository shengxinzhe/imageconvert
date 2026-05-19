import { ToolLandingPage } from "@/components/tool-landing-page";
import { toolMetadata } from "@/lib/metadata";
import { tools, type ToolSlug } from "@/lib/tools-config";

export function createToolPage(slug: ToolSlug) {
  const tool = tools[slug];
  return {
    metadata: toolMetadata(tool),
    Page: function ToolPage() {
      return <ToolLandingPage tool={tool} />;
    },
  };
}
