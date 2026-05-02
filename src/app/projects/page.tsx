import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Solidity 智能合约项目展示，包含合约设计、Foundry 测试和前端集成。",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mb-10 text-[var(--muted)]">
        Solidity · Foundry · Next.js · wagmi
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
