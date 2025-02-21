import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    heroui({
      layout: {
        radius: {
          small: "0.35rem",
          medium: "0.55rem",
          large: "0.85rem",
        },
        borderWidth: {
          small: "0.01rem",
          medium: "0.05rem",
          large: "0.15rem",
        },
      },
    }),
  ],
};
