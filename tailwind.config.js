/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   wave: {
      //     "0%": { transform: "rotate(0.0deg)" },
      //     "10%": { transform: "rotate(14deg)" },
      //     "20%": { transform: "rotate(-8deg)" },
      //     "30%": { transform: "rotate(14deg)" },
      //     "40%": { transform: "rotate(-4deg)" },
      //     "50%": { transform: "rotate(10.0deg)" },
      //     "60%": { transform: "rotate(0.0deg)" },
      //     "100%": { transform: "rotate(0.0deg)" },
      //   },
      //   animation: {
      //     "waving-hand": "wave 2s linear infinite",
      //   },
      // },
      keyframes: {
        //Add keyframes for the new animation here
        "new-animation": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "hero-image": "url('/public/')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      Width: {
        container: "1140px",
      },
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
