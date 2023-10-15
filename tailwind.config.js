/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*"],
  "header-bg": "url('./src/assets/bg.svg')",

  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('./src/assets/bg.svg') ",
      },
    },
  },
  plugins: [],
};
