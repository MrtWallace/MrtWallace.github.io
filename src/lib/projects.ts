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
    id: "sentinel",
    name: "Sentinel — AI-Operated Smart Account",
    description:
      "An AI-powered smart account that executes on-chain transactions from natural language instructions. Users set rules in plain English, Sentinel enforces daily spend limits — you stay in control. Built with Solidity + Foundry on-chain, Python Agent (Claude API + web3.py) for intent parsing, and a Scaffold-ETH 2 frontend.",
    tech: ["Solidity", "Foundry", "Claude API", "Python", "web3.py", "Next.js", "Scaffold-ETH 2"],
    status: "In Progress",
    featured: true,
    githubUrl: "https://github.com/MrtWallace/sentinel",
  },
  {
    id: "solidity-course",
    name: "Solidity Learning Journey",
    description:
      "Hands-on Solidity skill-building through Speedrun Ethereum challenges and Foundry projects. Covers ERC721/ERC20, AMM DEX, Chainlink price feeds, contract security (RiggedRoll attack), and multi-challenge Sepolia deployments.",
    tech: ["Solidity", "Foundry", "Hardhat", "OpenZeppelin", "Ethers.js", "Sepolia"],
    status: "Live",
    featured: true,
    githubUrl: "https://github.com/MrtWallace/solidity-course",
  },
];
