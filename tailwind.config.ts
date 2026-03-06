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
        gold: {
          DEFAULT: "#c7a92c",
          light: "#d4b94a",
          dark: "#a88d1e",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "slide-up-delay-1": "slideUp 0.4s ease-out 0.08s both",
        "slide-up-delay-2": "slideUp 0.4s ease-out 0.16s both",
        "slide-up-delay-3": "slideUp 0.4s ease-out 0.24s both",
        "slide-up-delay-4": "slideUp 0.4s ease-out 0.32s both",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.7" },
        },
      },
      boxShadow: {
        "card": "0 1px 3px rgba(82, 64, 37, 0.06), 0 1px 2px rgba(82, 64, 37, 0.04)",
        "card-hover": "0 8px 25px rgba(82, 64, 37, 0.1), 0 4px 10px rgba(82, 64, 37, 0.06)",
        "card-dark": "0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12)",
        "card-dark-hover": "0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.18)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
