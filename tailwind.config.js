/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "default-regular": "Gabarito-Regular",
        "default-medium": "Gabarito-Medium",
        "default-semibold": "Gabarito-SemiBold",
        "default-bold": "Gabarito-Bold",
        "montserrat-regular": "Montserrat-Regular",
        "montserrat-medium": "Montserrat-Medium",
        "montserrat-semibold": "Montserrat-SemiBold",
        "montserrat-light": "Montserrat-Light",
      },
      colors: {
        "custom-black": "#0F0F0F",
        "dark-black": "#1C202B",
        "dark-card": "#262C38",
        primary: "#0D9FDB",
      },
    },
  },
  plugins: [],
};
