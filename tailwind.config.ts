import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        surface: "#0a0d0a",
        panel: "rgba(255,255,255,0.04)",
        accent: {
          DEFAULT: "#48B94A",
          soft: "#6FD671",
          dim: "#2E7A30",
          glow: "rgba(72,185,74,0.35)",
        },
        ink: {
          DEFAULT: "#F5F7F5",
          dim: "#9CA3A0",
          faint: "#5C625E",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
        glass: "18px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glow-sm": "0 0 24px rgba(72,185,74,0.18)",
        "glow-md": "0 0 48px rgba(72,185,74,0.24)",
        "glow-lg": "0 0 96px rgba(72,185,74,0.28)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(12px,-18px) scale(1.03)" },
          "100%": { transform: "translate(0,0) scale(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
