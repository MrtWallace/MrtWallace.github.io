import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <h2 className="text-2xl font-bold tracking-tight text-[var(--text)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-[var(--muted)]">{subtitle}</p>
      )}
    </div>
  );
}
