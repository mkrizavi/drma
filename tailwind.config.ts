import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { graphite: "#161C1B", lime: "#C6ED42", paper: "#F6F6F2" },
      fontFamily: { sans: ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
