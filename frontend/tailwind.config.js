const colors = require("tailwindcss/colors");

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        mainBackground: {
          DEFAULT: "#232f3e",
          light: "#F4F4F6",
        },
        mainText: {
          DEFAULT: "#fff",
        },
        boxShadow: {
          DEFAULT: "#bebebe",
        },
        cyan: colors.cyan,
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
        orange: colors.orange,
      },

      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },

      backgroundSize: {
        min: "1rem",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      borderRadius: ["hover", "focus", "first", "last", "before", "after"],
      display: ["before", "after"],
      textColor: ["before", "after", "group-hover"],
      background: ["before", "after", "group-hover"],
      color: ["before", "after", "hover", "focus", "first", "last"],
      margin: ["before", "after"],
      width: ["before", "after"],
      height: ["before", "after"],
      position: ["before", "after"],
      border: ["before", "after"],
    },
  },
  plugins: [],
};
