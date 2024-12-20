/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SVN-Gilroy', 'sans-serif'],
      },
      
      screens: {
        'xs': '414px',
        'sm': '640px', 
        'md': '768px',  
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px' 
      },
    },
  },
  plugins: [],
};
