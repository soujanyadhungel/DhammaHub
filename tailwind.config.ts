import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Pariyatti mobile app palette — light mode
        cream: {
          DEFAULT: "#f4efe7",
          50: "#faf8f5",
          100: "#f4efe7",
          200: "#e9dfd0",
          300: "#dcd3c0",
        },
        beige: {
          DEFAULT: "#dcd3c0",
          100: "#ece8df",
          200: "#dcd3c0",
          300: "#ccc0a8",
        },
        brown: {
          DEFAULT: "#8f7140",
          50: "#f3ead9",
          100: "#c9a96e",
          200: "#8f7140",
          300: "#6b5430",
          400: "#524025",
          500: "#3a2d1a",
          600: "#292112",
        },
        rust: {
          DEFAULT: "#BA5626",
          light: "#d4673a",
          dark: "#9a4520",
        },
        gold: "#c7a92c",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
