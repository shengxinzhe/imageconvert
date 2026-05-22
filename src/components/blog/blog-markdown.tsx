import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { AppLocale } from "@/i18n/routing";
import { localePath } from "@/lib/locale-path";

function MarkdownLink({
  href,
  locale,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { locale: AppLocale }) {
  if (!href) return <span>{children}</span>;

  if (href.startsWith("/")) {
    return (
      <Link
        href={localePath(href, locale)}
        className="font-medium text-[var(--mintlify-green)] no-underline hover:underline"
      >
        {children}
      </Link>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} rel="nofollow noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  const safe =
    href.startsWith("https://") ||
    href.startsWith("http://");

  if (!safe) return <span>{children}</span>;

  return (
    <a href={href} rel="noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  );
}

function markdownComponents(locale: AppLocale): Components {
  return {
    a: ({ href, children, ...props }) => (
      <MarkdownLink href={href} locale={locale} {...props}>
        {children}
      </MarkdownLink>
    ),
  };
}

export function BlogMarkdown({
  content,
  locale,
}: {
  content: string;
  locale: AppLocale;
}) {
  return (
    <div className="prose-mint">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ]}
        components={markdownComponents(locale)}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
