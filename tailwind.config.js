/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: "#123456",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
