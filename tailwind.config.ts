import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          950: "#080504", // Fundo principal ultra dark com toque âmbar
          900: "#100B07", // Fundo de seções
          850: "#18100B", // Fundo de cards
          800: "#221710", // Superfícies elevadas
          700: "#322218", // Bordas de cards
          600: "#493223", // Bordas ativas
        },
        amberNeon: "#FF8C00",
        amberGlow: "rgba(255, 140, 0, 0.25)",
        goldNeon: "#F59E0B",
        goldGlow: "rgba(245, 158, 11, 0.25)",
        fireNeon: "#FF4500",
        whatsappGreen: "#25D366",
        cyanNeon: "#00E5FF",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "amber-glow": "0 0 30px -5px rgba(255, 140, 0, 0.35)",
        "gold-glow": "0 0 30px -5px rgba(245, 158, 11, 0.35)",
        "fire-glow": "0 0 35px -5px rgba(255, 69, 0, 0.4)",
        "wa-glow": "0 0 25px -3px rgba(37, 211, 102, 0.45)",
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(to right, rgba(255, 140, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 140, 0, 0.04) 1px, transparent 1px)",
        "amber-radial": "radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, rgba(245, 158, 11, 0.05) 50%, transparent 80%)",
      },
    },
  },
  plugins: [],
};

export default config;
