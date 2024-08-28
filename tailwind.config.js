const { transform } = require("next/dist/build/swc");
const { DEFAULT_RUNTIME_WEBPACK } = require("next/dist/shared/lib/constants");
const { Satisfy, Poppins } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Satisfy: ["Satisfy", "cursive"],
        Poppins,
      },

      container: {
        center: true,
        padding: {
          DEFAUL: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        animation: {
          "spin-superslow": "spin 18s linear infinite",
          rocket: "rocket 3s linear infinite",
        },
        keyframes: {
          rocket: {
            "0%, 100%": {
              transform: "rotate(-2deg) translate(0px, 0px)",
            },
            "50%": {
              transform: "rotate(2deg) translate(50px, 50px)",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
