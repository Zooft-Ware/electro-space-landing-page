import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "inter-regular": [
        '"Inter", sans-serif',
        { fontVariationSettings: '"opsz" auto, "wght" 400, "slnt" normal' },
      ],
      "inter-semibold": [
        '"Inter", sans-serif',
        { fontVariationSettings: '"opsz" auto, "wght" 600, "slnt" normal' },
      ],
      "inter-bold": [
        '"Inter", sans-serif',
        { fontVariationSettings: '"opsz" auto, "wght" 700, "slnt" normal' },
      ],
      "poppins-regular": [
        '"Poppins", sans-serif',
        { fontVariationSettings: '"opsz" auto, "wght" 400, "slnt" normal' },
      ],
      "poppins-semibold": [
        '"Poppins", sans-serif',
        { fontVariationSettings: '"opsz" auto, "wght" 600, "slnt" normal' },
      ],
      "poppins-bold": [
        '"Poppins", sans-serif',
        { fontVariationSettings: '"opsz" auto, "wght" 700, "slnt" normal' },
      ],
      "oswald-regular": [
        '"Oswald", sans-serif',
        { fontVariationSettings: '"opsz" auto, "wght" 400, "slnt" normal' },
      ],
      "oswald-semibold": [
        '"Oswald", sans-serif',
        { fontVariationSettings: '"opsz" auto, "wght" 600, "slnt" normal' },
      ],
      "oswald-bold": [
        '"Oswald", sans-serif',
        { fontVariationSettings: '"opsz" auto, "wght" 700, "slnt" normal' },
      ],
    },
    extend: {
      colors: {
        ...colors,
        primary: "rgb(37,51,66)",
        secondary: "#314154",
        title: "#2d4256",
        subtitle: "#5b6673",
        content: "#5b6673",
        alternate: "#e2231a",
      },
      transitionProperty: {
        "translate-opacity": "translate, opacity",
      },
    },
  },
  plugins: [],
};
