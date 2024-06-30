/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: "#c2e2ed",
        dimgray: {
          100: "#6e6e6e",
          200: "#5a5a5a",
        },
        white: "#fff",
        forestgreen: "#218f38",
        darkgray: "#9d9d9d",
        lightseagreen: "#20adb5",
        powderblue: "#92cbce",
        gainsboro: "#e2e2e2",
        lightgray: "#d7cdcd",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "21xl": "40px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mini: "15px",
      base: "16px",
      xl: "20px",
      xs: "12px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
