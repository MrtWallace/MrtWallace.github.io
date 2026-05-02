import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PostCard } from "@/components/blog/PostCard";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 space-y-20">
      {/* Hero */}
      <section className="space-y-5">
        <p className="font-mono text-sm text-[var(--primary)]">
          &gt; whoami
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          MrtWallace
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-xl">
          Junior Web3 / Smart Contract Developer。Solidity · Foundry · Next.js。
          网络安全背景，正在构建链上应用。
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 transition-colors"
          >
            View Projects <ArrowRight size={15} />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--muted)] transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Latest Posts</h2>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
            >
              All posts <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
