import React from "react";
import { EditorialCard } from "./EditorialCard";

interface ProjectData {
  id: string;
  name: string;
  description: string;
  link?: string;
  image?: string;
  tech?: string[];
  githubUrl?: string;
}

interface ProjectBentoLayoutProps {
  mainProject: ProjectData;
  secondaryProjects: ProjectData[];
}

export function ProjectBentoLayout({
  mainProject,
  secondaryProjects,
}: ProjectBentoLayoutProps) {
  // Pad with placeholders if less than 4
  const placeholdersNeeded = Math.max(0, 4 - secondaryProjects.length);
  const placeholders = Array.from({ length: placeholdersNeeded }).map((_, i) => ({
    id: `upcoming-${i}`,
    name: "Coming Soon",
    description: "New experiment in progress in the lab.",
    tech: ["TBA"],
  }));
  
  const displaySecondary = [...secondaryProjects, ...placeholders].slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full">
      {/* Main Featured Project (2x2) */}
      <a
        href={mainProject.githubUrl || "#"}
        target={mainProject.githubUrl ? "_blank" : undefined}
        rel={mainProject.githubUrl ? "noopener noreferrer" : undefined}
        className="md:col-span-2 md:row-span-2 block"
      >
        <EditorialCard
          className="h-full flex flex-col justify-end p-6 md:p-8 group cursor-pointer min-h-[300px]"
          glow={true}
        >
          <div className="relative z-20">
          <div className="text-xs font-mono text-primary mb-3 opacity-80 uppercase tracking-widest">
            Featured / {mainProject.id}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
            {mainProject.name}
          </h3>
          <p className="text-sm md:text-base text-muted leading-relaxed max-w-md">
            {mainProject.description}
          </p>
          {mainProject.tech && (
            <div className="flex flex-wrap gap-2 mt-6">
              {mainProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full border border-border bg-surface/50 text-secondary backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Abstract background highlight */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-tr from-primary/20 to-transparent" />
      </EditorialCard>
      </a>

      {/* 4 Secondary Projects (1x1 each) */}
      {displaySecondary.map((project) => (
        <a
          key={project.id}
          href={project.githubUrl || "#"}
          target={project.githubUrl ? "_blank" : undefined}
          rel={project.githubUrl ? "noopener noreferrer" : undefined}
          className="md:col-span-1 md:row-span-1 block"
        >
          <EditorialCard
            className="h-full p-5 md:p-6 flex flex-col justify-between group cursor-pointer min-h-[160px] md:min-h-[auto]"
          >
            <div>
              <div className="text-[10px] font-mono text-muted mb-2 uppercase tracking-wider">
                {project.id.startsWith("upcoming") ? "LAB" : project.id}
              </div>
              <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {project.name}
              </h4>
            </div>
            <p className="text-xs text-muted line-clamp-2 mt-3">
              {project.description}
            </p>
          </EditorialCard>
        </a>
      ))}
    </div>
  );
}
