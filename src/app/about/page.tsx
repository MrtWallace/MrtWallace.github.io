import type { Metadata } from "next";
import { GitHubIcon } from "@/components/ui/icons";
import { TechBadge } from "@/components/ui/TechBadge";

export const metadata: Metadata = {
  title: "About",
  description: "Junior Web3 / Smart Contract Developer，正在求职中。",
};

const SKILLS = [
  { category: "Smart Contract", items: ["Solidity", "Foundry"] },
  { category: "Frontend", items: ["Next.js", "React", "TypeScript"] },
  { category: "Web3 Frontend", items: ["wagmi", "viem", "shadcn/ui"] },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-12">
      {/* Bio */}
      <section>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">About</h1>
        <div className="space-y-3 text-[var(--muted)] leading-relaxed">
          <p>
            Junior Web3 / Smart Contract Developer，正在求职中。
          </p>
          <p>
            本科网络安全背景（CTF 参赛经历），毕业设计做机器学习方向。目前专注于
            Solidity 智能合约开发，正在构建 MultiSig Wallet 项目——涵盖合约设计、
            Foundry 测试与 wagmi 前端集成全栈。
          </p>
          <p>
            业余时间在学游戏开发，也折腾过在 GTX 1060 上跑 64k 上下文的本地大模型。
          </p>
        </div>
      </section>

      {/* 技术栈 */}
      <section>
        <h2 className="mb-5 text-xl font-semibold text-[var(--text)]">
          Tech Stack
        </h2>
        <div className="space-y-4">
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="flex items-start gap-4">
              <span className="w-36 shrink-0 text-sm text-[var(--muted)]">
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 当前状态 */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">
          Current Status
        </h2>
        <ul className="space-y-2 text-sm text-[var(--muted)]">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            MultiSig Wallet 开发中（Phase 1 — 合约 + 前端）
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            开放 Junior Web3 / Solidity 岗位机会
          </li>
        </ul>
      </section>

      {/* Links */}
      <section>
        <a
          href="https://github.com/MrtWallace"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          <GitHubIcon size={16} />
          github.com/MrtWallace
        </a>
      </section>
    </div>
  );
}
