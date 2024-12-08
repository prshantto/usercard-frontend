/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: { 
        '60%': '60%',
        '50%': '50%',
        '40%': '40%' ,
        '30%': '30%' ,
        '10%': '10%'
      },
    },
  },
  plugins: [],
}

