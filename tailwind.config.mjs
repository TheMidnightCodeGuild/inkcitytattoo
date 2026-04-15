/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        theme1: "#3F4064",
        theme2: "#6FCF97",
      },
    },
  },
  plugins: [],
};
