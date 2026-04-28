"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ContractAddressProps {
  address: string;
  network?: "mainnet" | "sepolia";
}

const ETHERSCAN_BASE: Record<string, string> = {
  mainnet: "https://etherscan.io/address",
  sepolia: "https://sepolia.etherscan.io/address",
};

function truncate(addr: string) {
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export function ContractAddress({
  address,
  network = "sepolia",
}: ContractAddressProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const etherscanUrl = `${ETHERSCAN_BASE[network]}/${address}`;

  return (
    <TooltipProvider delayDuration={200}>
      <span className="inline-flex items-center gap-1.5 rounded-md bg-[var(--surface)] border border-[var(--border)] px-2 py-1 font-mono text-sm text-[var(--text)]">
        <span>{truncate(address)}</span>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleCopy}
              className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              aria-label="Copy address"
            >
              {copied ? (
                <Check size={14} className="text-green-400" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent>{copied ? "Copied!" : "Copy address"}</TooltipContent>
        </Tooltip>

        <a
          href={etherscanUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
          aria-label="View on Etherscan"
        >
          <ExternalLink size={14} />
        </a>
      </span>
    </TooltipProvider>
  );
}
