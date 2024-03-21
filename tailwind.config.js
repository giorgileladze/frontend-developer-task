/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: {
        blue: '#585EE3',
        gray: '#F5F8FF',
      },
      interface: {
        black: '#000000',
        blue: '#1D2D35',
        darkgray: '#657178',
        gray: '#EFF4F5',
        white: '#ffffff'
      }
    }
  },
  plugins: [],
}

