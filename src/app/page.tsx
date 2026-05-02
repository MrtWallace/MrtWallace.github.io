import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { projects } from "@/lib/projects";
import { EditorialCard } from "@/components/EditorialCard";
import { ProjectBentoLayout } from "@/components/ProjectBentoLayout";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);
  
  // Since we only have 1 project currently, it will be the main one, and others will be padded
  const mainProject = projects[0] || {
    id: "demo",
    name: "Sample Project",
    description: "Sample description",
    tech: ["Next.js"]
  };
  const secondaryProjects = projects.slice(1);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 space-y-12">
      
      {/* 1. HERO GIANT CARD */}
      <EditorialCard className="p-6 md:p-8 flex flex-col md:flex-row items-start justify-between gap-6" glow={true}>
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-surface/50 text-[10px] font-mono text-muted tracking-wider">
            &gt; whoami
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground leading-[1.1]">
            MrtWallace
          </h1>
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl font-light">
            Junior Web3 / Smart Contract Developer。<br className="hidden md:block"/>
            Solidity · Foundry · Next.js。<br className="hidden md:block"/>
            网络安全背景，正在构建链上应用。
          </p>
        </div>
        
        {/* Subtle Peripheral Elements */}
        <div className="flex flex-row gap-6 text-muted/60 mt-8 md:mt-0">
          <Link href="https://github.com/MrtWallace" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-2 md:p-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
            </svg>
          </Link>
          <Link href="https://x.com/Wallace0x86157" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-2 md:p-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </Link>
          <Link href="mailto:hello@example.com" className="hover:text-foreground transition-colors p-2 md:p-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </Link>
        </div>
      </EditorialCard>

      {/* 2. PROJECTS GIANT CARD */}
      <EditorialCard className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground">Projects</h2>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors font-mono tracking-widest uppercase"
          >
            All Projects <ArrowRight size={16} />
          </Link>
        </div>
        
        <ProjectBentoLayout mainProject={mainProject} secondaryProjects={secondaryProjects} />
      </EditorialCard>

      {/* 3. BLOG GIANT CARD */}
      {latestPosts.length > 0 && (
        <EditorialCard className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground">Blog</h2>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors font-mono tracking-widest uppercase"
            >
              Archive <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group p-4 md:p-5 rounded-2xl border border-glass bg-white/[0.01] hover:bg-white/[0.03] hover:border-glass-inset transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-muted tracking-widest">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <div className="text-muted group-hover:text-foreground transition-colors">
                    <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </EditorialCard>
      )}
    </div>
  );
}
