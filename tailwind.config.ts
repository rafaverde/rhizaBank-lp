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
        "hero-image": "url('../assets/hero-background.jpg')",
      },
      colors: {
        "rhiza-green-100": "#E0F7E8",
        "rhiza-green-300": "#86E6A6",
        "rhiza-green-500": "#1EC85F",
        "rhiza-green-900": "#0A3115",

        "rhiza-blue-500": "#1E3A8A",
        "rhiza-blue-900": "#110E4F",
      },
      minHeight: {
        "screen-content": "calc(100vh - 160px)",
      },
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        slideDown: "slideDown 300ms ease-out",
        slideUp: "slideUp 300ms ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
