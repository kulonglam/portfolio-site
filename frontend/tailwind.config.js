/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0e1218",
          soft: "#2a3038",
          muted: "#5c6570",
        },
        paper: {
          DEFAULT: "#f2f4f6",
          warm: "#e9eef2",
          elev: "#ffffff",
        },
        signal: {
          DEFAULT: "#0d7377",
          dark: "#08585b",
          light: "#1a9ea3",
          mist: "rgba(13, 115, 119, 0.12)",
        },
        line: "#d0d8e0",
      },
      fontFamily: {
        display: ['"Syne"', "system-ui", "sans-serif"],
        sans: ['"Figtree"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 48px rgba(14, 18, 24, 0.07)",
        lift: "0 20px 50px rgba(13, 115, 119, 0.18)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(14,18,24,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,18,24,0.045) 1px, transparent 1px)",
        mesh: "radial-gradient(ellipse 80% 60% at 10% 20%, rgba(13,115,119,0.18), transparent 55%), radial-gradient(ellipse 60% 50% at 90% 10%, rgba(14,18,24,0.06), transparent 50%), radial-gradient(ellipse 50% 40% at 70% 90%, rgba(26,158,163,0.12), transparent 55%)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        softPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.04)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drawLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-up-delay": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both",
        "fade-up-delay-2": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.24s both",
        "fade-up-delay-3": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.36s both",
        "soft-pulse": "softPulse 10s ease-in-out infinite",
        float: "floatY 6s ease-in-out infinite",
        "draw-line": "drawLine 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
