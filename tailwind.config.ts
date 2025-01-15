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
        primary: "#82C3ED",
        'primary-dark': "#507DBC",
        light: "#DDF0F4",
        dark: "#071E2E",
        secondary: "#EDAD82",
        'secondary-dark': "#ff260089",
        muted: "#9e9e9e",
        highlight: "#023755",
        info: "#9E82ED",
        success: "#82EDAA",
        warning: "#ED8982",
      },
    },
  },
  plugins: [],
} satisfies Config;
