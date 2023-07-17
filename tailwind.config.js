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
        golden: "#D6AB74",
        thunder: "#20063C",
        water: "#0B2244",
        fire: "#1E0206",
        ice: "#171536",
      },
      padding: {
        13: "3.375rem",
      },
      backgroundImage: {
        "thunder-img": "url('./assets/thunder-bg.jpg')",
        "water-img": "url('./assets/water-bg.jpg')",
        "fire-img": "url('./assets/fire-bg.jpg')",
        "ice-img": "url('./assets/ice-bg.jpg')",
        "main-gradient":
          "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.56) 50%, rgba(0, 0, 0, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};
