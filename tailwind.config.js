/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom': "linear-gradient(to right, #ff0000, #00ff00)"
      },
    },
  },
  plugins: [],
}

