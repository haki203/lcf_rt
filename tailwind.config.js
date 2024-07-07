/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-white-100": "#fff",
        "color-green-200": "#9c9c42",
        gray: "#262626",
        "color-gray-200": "#f5f5f5",
        darkgray: "#999898",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        mini: "15px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      "17xl": "36px",
      "11xl": "30px",
      "29xl": "48px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
