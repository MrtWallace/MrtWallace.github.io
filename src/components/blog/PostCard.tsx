import Link from "next/link";
import type { PostMeta } from "@/lib/mdx";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--primary)]"
    >
      <div className="mb-2 flex flex-wrap gap-1.5">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--border)] px-2 py-0.5 font-mono text-xs text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-1 font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
        {post.title}
      </h3>
      <p className="mb-3 text-sm text-[var(--muted)] line-clamp-2">
        {post.description}
      </p>
      <time className="font-mono text-xs text-[var(--muted)]">{post.date}</time>
    </Link>
  );
}
