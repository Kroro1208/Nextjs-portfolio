/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        darkblue: "#00008b",
        cadetblue: "#5f9ea0",
        whitesmoke: "#f5f5f5",
        gray: "#808080"
      },
      backgroundImage: {
        'custom-image1': "url('/asetts/Trainer-cuate.png')",
        'custom-image2': "url('/asetts/Fire.png')",
        'custom-image3': "url('/asetts/Cooking-cuate.png')",
      }
    },
  },
  plugins: [],
};
