import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import type { Project } from "@/lib/projects";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { TechBadge } from "@/components/ui/TechBadge";
import { StatusBadge } from "@/components/projects/StatusBadge";
import { ContractAddress } from "@/components/ui/ContractAddress";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{project.name}</CardTitle>
          <StatusBadge status={project.status} />
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-3">
        {/* 技术栈 */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
        </div>

        {/* 合约地址（部署后显示） */}
        {project.contractAddress && (
          <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <span className="font-mono">Contract:</span>
            <ContractAddress
              address={project.contractAddress}
              network={project.network ?? "sepolia"}
            />
          </div>
        )}
      </CardContent>

      {/* 操作链接 */}
      <CardFooter className="gap-3 pt-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            <GitHubIcon size={14} />
            GitHub
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
