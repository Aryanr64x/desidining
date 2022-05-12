module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'righteous': ['Righteous', 'cursive'] 
      },
    },
    colors:{
      primary: '#FFA132',
      white: '#ffffff',
      black: "#000000", 
      fade: "#00000000"
    },
    
  },
 
  plugins: [],
}
