import { cn } from "@/lib/utils";

const TECH_COLORS: Record<string, string> = {
  Solidity: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  Foundry: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  "Next.js": "bg-white/10 text-white/80 border-white/20",
  TypeScript: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  wagmi: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  viem: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  "shadcn/ui": "bg-slate-500/15 text-slate-300 border-slate-500/30",
  React: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
};

const DEFAULT_COLOR =
  "bg-[var(--surface)] text-[var(--muted)] border-[var(--border)]";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

export function TechBadge({ tech, className }: TechBadgeProps) {
  const color = TECH_COLORS[tech] ?? DEFAULT_COLOR;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        color,
        className
      )}
    >
      {tech}
    </span>
  );
}
