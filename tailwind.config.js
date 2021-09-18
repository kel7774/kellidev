module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['nunito', 'serif']
    },
    boxShadow: {
      'circle': '0 0 0 16px #C7D2FE'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
