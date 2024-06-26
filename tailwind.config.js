/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        mainColor: "#1d9bf0",
      },
      textColor: {
        secondary: "#666",
      },
    },
  },
  plugins: [],
  important: true,
};
