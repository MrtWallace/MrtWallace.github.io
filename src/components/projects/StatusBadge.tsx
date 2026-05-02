import type { ProjectStatus } from "@/lib/projects";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  "In Progress":
    "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Live: "bg-green-500/15 text-green-400 border-green-500/30",
  Archived: "bg-slate-500/15 text-slate-400 border-slate-500/30",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        STATUS_STYLES[status]
      )}
    >
      {status}
    </span>
  );
}
