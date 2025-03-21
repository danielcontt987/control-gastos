/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
         'custom-blue': '#465fff',
         'vibrant-rubi': '#e53f67',
         'mango-yellow': '#f6ab0e'
       }
    },
  },
  plugins: [],
}

