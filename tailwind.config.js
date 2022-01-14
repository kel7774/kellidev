module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
    './layout/**/*.js',
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['nunito', 'serif']
    },
    screens: {
      'xs': '375px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  height: {
    'customHeight': '54rem'
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
