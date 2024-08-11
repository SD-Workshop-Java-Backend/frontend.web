const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "20%": { transform: "scaleY(1.2)" },
          "40%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        loading: "loading  1s ease infinite",
        "loading-100" : "loading 1s  ease 0.1s infinite",
        "loading-200" : "loading 1s  ease 0.25s infinite",
        "loading-300" : "loading 1s  ease 0.5s infinite",
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
