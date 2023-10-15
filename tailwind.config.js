/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*"],

  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('./src/assets/bg.svg') ",
      },
    },
  },
  plugins: [],
};
