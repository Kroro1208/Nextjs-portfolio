/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#00008b",
        cadetblue: "#5f9ea0",
        whitesmoke: "#f5f5f5",
        gray: "#808080"
      },
    },
  },
  plugins: [],
};
