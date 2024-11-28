import type { Config } from "tailwindcss"

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
    },
  },
  plugins: [],
} satisfies Config
