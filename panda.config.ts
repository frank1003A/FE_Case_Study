import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      colors: {
        primary: { value: "#5570F1" },
        secondary: { value: "#FFCC91" },
        stroke: { value: "#F1F3F9" },
        mainbg: { value: "#f4f5fa" },
        pfont: { value: "#53545C" },
      },
      fonts: {
        pfont: { value: "#53545C" },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
