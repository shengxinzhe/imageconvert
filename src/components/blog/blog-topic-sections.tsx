import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import {
  BLOG_TOPICS,
  type BlogTopic,
  getBlogPostsByTopic,
  getUncategorizedBlogPosts,
} from "@/lib/blog-seo-links";
import { getT } from "@/lib/i18n/translations";

const TOPIC_LABEL_KEYS: Record<BlogTopic, string> = {
  heic: "blog.topicHeic",
  webp: "blog.topicWebp",
  avif: "blog.topicAvif",
  privacy: "blog.topicPrivacy",
};

function TopicPostList({
  locale,
  topic,
}: {
  locale: AppLocale;
  topic: BlogTopic;
}) {
  const t = getT(locale);
  const posts = getBlogPostsByTopic(topic, locale);

  if (!posts.length) return null;

  return (
    <section id={`topic-${topic}`} className="scroll-mt-24">
      <h2 className="text-xl font-semibold text-ink">{t(TOPIC_LABEL_KEYS[topic])}</h2>
      <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
        {posts.map((post) => (
          <li key={post.slug} className="py-6 first:pt-6">
            <Link href={`/blog/${post.slug}`} className="group block">
              <h3 className="font-medium text-ink group-hover:text-link">{post.title}</h3>
              <p className="mt-1 text-sm text-body">{post.description}</p>
              <p className="mt-2 font-mono text-xs text-mute">
                {post.publishedAt} · {post.readMinutes} {t("blog.minRead")}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function BlogTopicSections({ locale }: { locale: AppLocale }) {
  const t = getT(locale);
  const uncategorized = getUncategorizedBlogPosts(locale);

  return (
    <div className="mt-12 space-y-12">
      <div>
        <h2 className="text-2xl font-semibold tracking-display-sm text-ink">
          {t("blog.topicsTitle")}
        </h2>
        <nav className="mt-4 flex flex-wrap gap-2" aria-label={t("blog.topicsNavLabel")}>
          {BLOG_TOPICS.map((topic) => (
            <a
              key={topic}
              href={`#topic-${topic}`}
              className="rounded-full border border-hairline bg-canvas px-3 py-1 text-xs font-medium text-ink hover:bg-canvas-soft"
            >
              {t(TOPIC_LABEL_KEYS[topic])}
            </a>
          ))}
        </nav>
      </div>

      {BLOG_TOPICS.map((topic) => (
        <TopicPostList key={topic} locale={locale} topic={topic} />
      ))}

      {uncategorized.length > 0 ? (
        <section>
          <h2 className="text-xl font-semibold text-ink">{t("blog.topicMore")}</h2>
          <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
            {uncategorized.map((post) => (
              <li key={post.slug} className="py-6 first:pt-6">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <h3 className="font-medium text-ink group-hover:text-link">{post.title}</h3>
                  <p className="mt-1 text-sm text-body">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
