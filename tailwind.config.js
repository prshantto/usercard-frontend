/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: { 
        '80%': '80%',
        '90%': '90%',
        '60%': '60%',
        '75%': '75%',
        '50%': '50%',
        '40%': '40%' ,
        '30%': '30%' ,
        '10%': '10%'
      },
    },
  },
  plugins: [],
}

