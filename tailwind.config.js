/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        pretu: '#18181B',
        pretuu: '#2B2B31'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ],
}

