import { BlogMarkdown } from "@/components/blog/blog-markdown";
import type { AppLocale } from "@/i18n/routing";
import type { ToolSeoSection } from "@/lib/tool-seo-types";

function ComparisonTable({ table }: { table: NonNullable<ToolSeoSection["table"]> }) {
  return (
    <figure className="not-prose my-6 overflow-x-auto">
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-hairline bg-canvas">
            {table.headers.map((header) => (
              <th key={header} className="px-3 py-2 font-medium text-ink">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join("|")} className="border-b border-hairline">
              {row.map((cell, i) => (
                <td key={`${i}-${cell.slice(0, 24)}`} className="px-3 py-2 text-body align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.caption ? (
        <figcaption className="mt-2 text-xs text-mute">{table.caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function ToolSeoSections({
  sections,
  locale,
}: {
  sections: ToolSeoSection[];
  locale: AppLocale;
}) {
  return (
    <>
      {sections.map((section) => (
        <div key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <BlogMarkdown key={paragraph.slice(0, 48)} content={paragraph} locale={locale} />
          ))}
          {section.content && !section.paragraphs?.length ? (
            <BlogMarkdown content={section.content} locale={locale} />
          ) : null}
          {section.table ? <ComparisonTable table={section.table} /> : null}
        </div>
      ))}
    </>
  );
}
