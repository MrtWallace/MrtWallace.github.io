"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleCopy}
            className="absolute right-3 top-3 rounded-md p-1.5 text-[var(--muted)] transition-colors hover:bg-[var(--border)] hover:text-[var(--text)]"
            aria-label="Copy code"
          >
            {copied ? (
              <Check size={14} className="text-green-400" />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>{copied ? "Copied!" : "Copy code"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
