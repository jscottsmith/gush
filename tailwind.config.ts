import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "2xs": "0.125rem",
        xs: "0.25rem",
        sm: "0.5rem",
        base: "0.75rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "6rem",
        "5xl": "8rem",
        "6xl": "10rem",
        "7xl": "12rem",
        "8xl": "14rem",
        "10xl": "16rem",
        "11xl": "18rem",
        "12xl": "20rem",
      },

      fontFamily: {
        futura: "futura-pt, sans-serif",
        poppins: "poppins, sans-serif",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
