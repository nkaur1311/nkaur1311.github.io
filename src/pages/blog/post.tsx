import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { getPost, allPosts } from "@/lib/blog";

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

interface BlogPostPageProps {
  slug: string;
}

export function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = useMemo(() => getPost(slug), [slug]);

  const related = useMemo(() => {
    if (!post || post.tags.length === 0) return [];
    return allPosts
      .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
      .sort((a, b) => {
        const aScore = a.tags.filter((t) => post.tags.includes(t)).length;
        const bScore = b.tags.filter((t) => post.tags.includes(t)).length;
        return bScore !== aScore ? bScore - aScore : b.date.localeCompare(a.date);
      })
      .slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-4">
        <p className="text-5xl">📄</p>
        <h1 className="text-xl font-serif text-foreground">Post not found</h1>
        <a href="#/blog" className="text-sm text-primary hover:underline">
          ← Back to blog
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border/60">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="#/blog"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} />
            All posts
          </a>
          <a
            href="#/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Portfolio →
          </a>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-6 pt-28 pb-24">
        {/* Cover */}
        {post.cover && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 rounded-2xl overflow-hidden aspect-[2/1]"
          >
            <img src={post.cover} alt="" className="w-full h-full object-cover" />
          </motion.div>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap gap-1.5 mb-4"
          >
            {post.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
              >
                <Tag size={10} />
                {t}
              </span>
            ))}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-serif font-medium text-foreground leading-tight mb-4"
        >
          {post.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.18 }}
          className="flex items-center gap-4 text-xs text-muted-foreground mb-10 pb-8 border-b border-border"
        >
          {post.date && (
            <span className="flex items-center gap-1.5">
              <Calendar size={11} />
              {formatDate(post.date)}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Clock size={11} />
            {post.readingTime} min read
          </span>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="prose-blog"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </motion.div>

        {/* Related posts */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-16 pt-10 border-t border-border"
          >
            <p className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-5">
              You might also enjoy
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((p) => (
                <a
                  key={p.slug}
                  href={`#/blog/${p.slug}`}
                  className="group block p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary/30 transition-all"
                >
                  {p.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {p.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] font-medium"
                        >
                          <Tag size={8} />
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm font-serif font-medium text-foreground group-hover:text-primary transition-colors leading-snug mb-2 line-clamp-2">
                    {p.title}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    {p.date && (
                      <span className="flex items-center gap-1">
                        <Calendar size={10} />
                        {new Date(p.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {p.readingTime} min
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Footer nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 pt-8 border-t border-border flex items-center justify-between"
        >
          <a
            href="#/blog"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            All posts
          </a>
          <a
            href="#/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to portfolio →
          </a>
        </motion.div>
      </main>
    </div>
  );
}
