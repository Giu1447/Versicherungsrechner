/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '50vh': '50vh',
        '35vh': '35vh',
        '75vh': '75vh',
      },
      blur: {
        's': '1px',
      },
      width: {
        '30vw': '30vw',
        '50vw': '50vw',
      },
    },
  },
  plugins: [],
}