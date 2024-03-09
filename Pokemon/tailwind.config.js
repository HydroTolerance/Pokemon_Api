/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],

  theme: {
    extend: {
      bgGradientDeg: {
        75: "75deg",
      },
    },
  },
  plugins: [],
};
