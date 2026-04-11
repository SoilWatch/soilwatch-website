import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Rubik'", "sans-serif"],
        body: ["'Karla'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"]
      },
      colors: {
        soil: {
          50: "#f8f7f3",
          100: "#efede6",
          200: "#ddd9d0",
          300: "#c1bcb0",
          400: "#979284",
          500: "#7a766d",
          600: "#62615c",
          700: "#4b4f58",
          800: "#312c25",
          900: "#1e1810"
        },
        earth: {
          50: "#fff9e9",
          100: "#fff0bf",
          200: "#fee08f",
          300: "#f9c349",
          400: "#ffb100",
          500: "#df9300",
          600: "#b97600",
          700: "#8d5908",
          800: "#5c3b08",
          900: "#332103"
        },
        carbon: {
          50: "#f6f7f8",
          100: "#eceff2",
          200: "#d5dbe3",
          300: "#b6c1cc",
          400: "#8f9baa",
          500: "#6d7885",
          600: "#4b4f58",
          700: "#3e434c",
          800: "#2d333b",
          900: "#171b21"
        }
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "counter": "counter 2s ease forwards"
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } }
      }
    }
  },
  plugins: []
};
export default config;
