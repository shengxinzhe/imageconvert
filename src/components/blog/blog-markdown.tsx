import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

function MarkdownLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) return <span>{children}</span>;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className="font-medium text-[var(--mintlify-green)] no-underline hover:underline">
        {children}
      </Link>
    );
  }

  const safe =
    href.startsWith("https://") ||
    href.startsWith("http://") ||
    href.startsWith("mailto:");

  if (!safe) return <span>{children}</span>;

  return (
    <a href={href} rel="noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  );
}

const components: Components = {
  a: ({ href, children, ...props }) => (
    <MarkdownLink href={href} {...props}>
      {children}
    </MarkdownLink>
  ),
};

export function BlogMarkdown({ content }: { content: string }) {
  return (
    <div className="prose-mint">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
