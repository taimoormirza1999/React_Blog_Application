/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColor: '#0F172A', // replace with your desired color value
      },
    },
  },
  plugins: [],
}