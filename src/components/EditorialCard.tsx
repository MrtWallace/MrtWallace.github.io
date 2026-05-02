import React from "react";

interface EditorialCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function EditorialCard({
  children,
  className = "",
  glow = false,
}: EditorialCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl
        bg-glass border border-glass
        shadow-glass backdrop-blur-2xl
        transition-all duration-300
        ${glow ? "shadow-glass-glow hover:shadow-glass" : "hover:shadow-glass-glow"}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
