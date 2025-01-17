import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../../public/images/BNF_Fr95_209v.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#001f54",
        'primary-dark': "#305252",
        light: "#E0ECFF",
        dark: "#07070A",
        secondary: "#9fc490",
        'secondary-dark': "#1E5200",
        muted: "#9e9e9e",
        highlight: "#ffb347",
        link: "#0056EB",
        info: "#9E82ED",
        success: "#82EDAA",
        warning: "#ED8982",
      },
    },
  },
  plugins: [],
} satisfies Config;
