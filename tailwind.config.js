/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },

    },
  },
  plugins: [require('daisyui'),],
}