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
      fontFamily: {
        sans: ["var(--font-jetbrains)", "sans-serif"],
        serif: ["var(--font-jetbrains)", "serif"],
      },
      backgroundImage: (theme) => ({
        "gradient-blue":
          "linear-gradient(45deg, rgba(0,142,255,1) 0%, rgba(73,80,83,1) 21%, rgba(17,81,111,1) 48%, rgba(8,97,139,1) 66%, rgba(31,66,82,1) 90%)",
      }),
      colors: {
        "back-col": "#141030",
        teal: "#03fcf4",
        "dark-teal": "#187173",
        "bg-col": "rgb(0,142,255)",
        "bg-gradient":
          "linear-gradient(45deg, rgba(0,142,255,1) 0%, rgba(73,80,83,1) 21%, rgba(17,81,111,1) 48%, rgba(8,97,139,1) 66%, rgba(31,66,82,1) 90%)",
      },
      height: {
        "90vh": "90vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "60vh": "60vh",
        "50vh": "50vh",
      },
    },
  },
  plugins: [],
};
