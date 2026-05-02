import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        border: "var(--border)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        foreground: "var(--text)",
        muted: "var(--muted)",
      },
      backgroundColor: {
        glass: "var(--glass-bg)",
      },
      borderColor: {
        glass: "var(--glass-border)",
        "glass-inset": "var(--glass-border-inset)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 var(--glass-border), inset 0 -1px 0 0 var(--glass-border-inset)",
        "glass-glow": "0 0 20px 0 var(--glass-glow), inset 0 1px 0 0 var(--glass-border), inset 0 -1px 0 0 var(--glass-border-inset)",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--text)",
            "--tw-prose-headings": "var(--text)",
            "--tw-prose-links": "var(--primary)",
            "--tw-prose-code": "#e2e8f0",
            "--tw-prose-pre-bg": "var(--surface)",
            "--tw-prose-hr": "var(--border)",
            "--tw-prose-quotes": "var(--muted)",
            "--tw-prose-quote-borders": "var(--primary)",
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
