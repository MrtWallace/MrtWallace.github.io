export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 mt-16">
      <div className="mx-auto max-w-4xl px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--muted)]">
        <span>© {new Date().getFullYear()} MrtWallace</span>
        <span>Built with Next.js · Solidity in progress</span>
      </div>
    </footer>
  );
}
