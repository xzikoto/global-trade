/** @type {import('tailwindcss').Config} */
export default {
  base: "/",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "text-primary": "var(--text-primary)",
        background: "var(--background)",
        sunflower: {
          50: "#FFF9E6",
          100: "#FFF3BF",
          200: "#FFE999",
          300: "#FFD700",
          400: "#FFB800",
          500: "#F2B705",
          600: "#CC9900",
          700: "#B7950B",
          800: "#8B6F00",
          900: "#5C4A00",
        },
        earth: {
          50: "#F7F4ED",
          100: "#E6E0D2",
          200: "#D4C8B3",
          300: "#C2B094",
          400: "#B09875",
          500: "#967D4D",
          600: "#7C6540",
          700: "#624E33",
          800: "#483726",
          900: "#2E2419",
        },
        leaf: {
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.5s ease-out",
        "float-smooth": "float-smooth 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E\")",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-radial-at-bottom":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
