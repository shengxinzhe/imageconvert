/** Shared SEO section shape for tool landing pages (AdSense / long-form copy). */
export interface ToolSeoTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface ToolSeoSection {
  heading: string;
  content?: string;
  paragraphs?: string[];
  table?: ToolSeoTable;
}
