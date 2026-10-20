import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        canvas: "#030712",
        surface: "#0b1222",
        "surface-card": "#0f172a",
        border: "#1e293b",
        "border-glow": "#3b82f6",
        accent: "#2563eb",
      },
    },
  },
  plugins: [],
};
export default config;
