import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF8F3",
        sand: "#F4EEE6",
        ink: "#1E2433",
        brand: { DEFAULT: "#F2780C", soft: "#FFF1E3", deep: "#C85A00" },
        telegram: "#229ED9",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(30,36,51,0.04), 0 8px 24px -12px rgba(30,36,51,0.12)",
        lift: "0 2px 4px rgba(30,36,51,0.04), 0 18px 40px -18px rgba(30,36,51,0.22)",
        brand: "0 10px 24px -10px rgba(242,120,12,0.55)",
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        "marquee-left": { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-right": { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "marquee-left": "marquee-left var(--duration, 80s) linear infinite",
        "marquee-right": "marquee-right var(--duration, 80s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
