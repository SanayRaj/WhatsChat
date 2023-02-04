/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/Screens/*.{js,jsx,tsx}',
    './src/Screens/Authentication/*.{js,jsx,tsx}',
    './src/Components/*.{js,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        bg: {
          50: '#383838',
          100: '#353535',
          200: '#333333',
          300: '#2F2F2F',
          400: '#2C2C2C',
          500: '#272727',
          600: '#252525',
          700: '#232323',
          800: '#1E1E1E',
          900: '#121212',
        },
      },
      fontFamily: {
        sansLight: ['Montserrat-Light'],
        sans: ['Montserrat-Regular'],
        sansMedium: ['Montserrat-Medium'],
        sansSemiBold: ['Montserrat-SemiBold'],
        sansBold: ['Montserrat-Bold'],
      },
    },
  },
  plugins: [],
};
