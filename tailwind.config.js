/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*"],

  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('../public/bg.svg') ",
      },
    },
  },
  plugins: [],
};
