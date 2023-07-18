/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Default_JP", "sans-serif"],
      },
      fontSize: {
        base: ["1rem", "1.5rem"],
        lg: ["1.25rem", "1.75rem"],
        xl: ["1.75rem", "2.25rem"],
        "2xl": ["2.5rem", "3.25rem"],
      },
      colors: {
        primary: "#E2D9C7",
        primaryLight: "#FEFFF1",
        secondary: "#424A5A",
        tertiary: "#8C7F6F",
        socialLink: {
          border: "#787265",
          bg: "#27313F",
        },
        white: "#FFF",
        transparent: "transparent",
        modalBg: "#10021ee6",
        golden: "#D6AB74",
        thunder: "#20063C",
        water: "#0B2244",
        fire: "#1E0206",
        ice: "#171536",
      },
      width: {
        13: "3.25rem",
        27: "6.75rem",
        21: "5.25rem",
      },
      height: {
        13: "3.25rem",
        27: "6.75rem",
        21: "5.25rem",
      },
      padding: {
        13: "3.25rem",
        19: "4.75rem",
        23: "5.75rem",
      },
      margin: {
        21: "5.25rem",
      },
      backgroundImage: {
        "thunder-img": "url('./assets/thunder-bg.jpg')",
        "water-img": "url('./assets/water-bg.jpg')",
        "fire-img": "url('./assets/fire-bg.jpg')",
        "ice-img": "url('./assets/ice-bg.jpg')",
        "main-gradient":
          "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.56) 50%, rgba(0, 0, 0, 0.00) 100%)",
      },
      boxShadow: {
        custom: "0px 4px 34px 0px rgba(0, 0, 0, 0.70);",
      },
    },
  },
  plugins: [],
};
