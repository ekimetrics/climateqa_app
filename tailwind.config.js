const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xs': '.625rem',    // 10px
        's': '11px',    // 11px
        'sm': '.75rem',     // 12px
        'base': '.875rem',  // 14px
        'lg': '1rem',       // 16px
        'xl': '1.125rem',   // 18px
        '2xl': '1.375rem',  // 22px
        '3xl': '1.75rem',   // 28px
        '4xl': '2.125rem',  // 34px
        '5xl': '2.75rem',   // 44px
        '6xl': '3.5rem',    // 56px
      },
      colors: {
        blueqa: {
          200:"#f0f4f8",
          300:"#b9c9d8",
          400:"#7394b1",
          500:"#7394b1",
          700:"#44617b",
          800:"#567b9c",
          900:"#3c566d",
        },
        grayqa: "#f2f2f7",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
