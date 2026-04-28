export type ProjectStatus = "In Progress" | "Live" | "Archived";

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  contractAddress?: string;
  etherscanUrl?: string;
  network?: "mainnet" | "sepolia";
}

export const projects: Project[] = [
  {
    id: "multisig-wallet",
    name: "MultiSig Wallet",
    description:
      "A multi-signature wallet requiring M-of-N owner approval before any transaction executes. Built with Solidity + Foundry on the backend and Next.js + wagmi on the frontend.",
    tech: ["Solidity", "Foundry", "Next.js", "wagmi", "viem", "shadcn/ui"],
    status: "In Progress",
    featured: true,
    githubUrl: "https://github.com/MrtWallace/multisig-wallet",
    // contractAddress and etherscanUrl filled in after Sepolia deployment
  },
];
