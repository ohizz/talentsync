/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/*{.svg}"],

  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('./public/bg.svg') ",
      },
    },
  },
  plugins: [],
};
