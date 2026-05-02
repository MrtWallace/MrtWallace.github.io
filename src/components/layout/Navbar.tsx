import Link from "next/link";
import { GitHubIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-[var(--text)] hover:text-[var(--primary)] transition-colors"
        >
          MrtWallace
        </Link>

        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden sm:block text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://github.com/MrtWallace"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
