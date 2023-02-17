/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "back-col":"#141030",
        "teal":"#03fcf4"
      },
      height:{
        "90vh":"90vh",
        "80vh":"80vh",
        "70vh":"70vh",
        "60vh":"60vh",
        "50vh":"50vh"
      }
    },
  },
  plugins: [],
};
