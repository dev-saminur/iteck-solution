/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primarybg: "#010046",
        secondary: "#010049",
        titleGray: "#767676",
        pricingbg: "linear-gradient(to bottom, #010049, #157aa6);",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("tailwindcss-animated")],
};
