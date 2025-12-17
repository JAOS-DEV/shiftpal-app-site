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
        primary: {
          DEFAULT: "#4A90E2",
          dark: "#2E5C8A",
          light: "#7AB4FF",
        },
        surface: {
          light: "#F7F9FC",
          dark: "#1A1F27",
        },
        text: {
          light: "#1A1F27",
          dark: "#F7F9FC",
          secondary: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["SF Mono", "Monaco", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
