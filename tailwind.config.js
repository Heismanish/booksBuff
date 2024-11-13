/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D3A45",
        secondary: "#F5EDE0",
        accent: "#8BA88E",
        textColor: "#3A3A3A",
        background: "#FAF8F5",
      },
    },
  },
  plugins: [],
};
