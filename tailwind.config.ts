import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-muted": "var(--accent-muted)",
        "brand-black": "#050505",
        "brand-yellow": "#FFCC00",
        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
