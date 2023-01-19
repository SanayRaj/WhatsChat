const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/Screens/*.{js,jsx,tsx}',
    './src/Screens/Authentication/*.{js,jsx,tsx}',
    './src/Components/*.{js,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
      },
    },
  },
  plugins: [],
};
