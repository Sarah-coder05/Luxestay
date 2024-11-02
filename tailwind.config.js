/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to ensure Tailwind scans all component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
