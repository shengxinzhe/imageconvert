import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        body: "var(--body)",
        mute: "var(--mute)",
        hairline: "var(--hairline)",
        "hairline-strong": "var(--hairline-strong)",
        canvas: "var(--canvas)",
        "canvas-soft": "var(--canvas-soft)",
        "canvas-soft-2": "var(--canvas-soft-2)",
        link: "var(--link)",
        "link-deep": "var(--link-deep)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        vercel: "8px",
        "vercel-lg": "12px",
      },
      letterSpacing: {
        display: "-0.05em",
        "display-sm": "-0.03em",
      },
      boxShadow: {
        card: "0 0 0 1px var(--hairline)",
        "card-hover": "0 4px 24px rgba(0, 0, 0, 0.06), 0 0 0 1px var(--hairline)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
