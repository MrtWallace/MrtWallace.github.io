import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrtwallace.github.io"),
  title: {
    default: "MrtWallace",
    template: "%s | MrtWallace",
  },
  description:
    "Junior Web3 / Smart Contract Developer. Solidity, Foundry, Next.js.",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://mrtwallace.github.io",
    siteName: "MrtWallace",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
