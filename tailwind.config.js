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
      },
    },
  },
  plugins: [],
};
