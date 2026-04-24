import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050B14",
        card: "#0A1128",
        cyan: "#00F0FF",
        purple: "#7000FF",
        white: "#FFFFFF",
        muted: "#8C9BB0"
      },
      fontFamily: {
        display: ['"Press Start 2P"', 'monospace'],
        body: ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
