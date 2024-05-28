/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '50vh': '50vh',
        '30vh': '30vh',
      },
      blur: {
        's': '1px',
      },
    },
  },
  plugins: [],
}