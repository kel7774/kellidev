module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
    './layout/**/*.js',
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'light-theme': 'linear-gradient(to bottom right, #e0e7ff, #c7d2fe, #818cf8)',
        'dark-theme': 'linear-gradient(to top right, #3730a3 50%, #4338ca, #818cf8)',
      },
      boxShadow: {
        'circle': 'inset 0 0 10px -10px rgba(55, 48, 168, 0.6)'
      },
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['nunito', 'serif'],
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
    },
    height: {
      'customHeight': '54rem'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
