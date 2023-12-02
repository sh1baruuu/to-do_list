/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-100": "#F1F1F1",
        'primary': '#265bff',
        'secondary': '#002087',
      },
      fontFamily: {
        'fugaz': 'Fugaz One',
      }
    },
  },
  plugins: [],
}

