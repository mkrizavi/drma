import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { graphite: "#171D1A", olive: "#819448", paper: "#F3F1EA" },
      fontFamily: { sans: ["Helvetica Neue", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
