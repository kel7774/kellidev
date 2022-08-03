module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
    './layout/**/*.js',
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'circle': 'inset 0 0 10px -10px rgba(55, 48, 168, 0.6)'
      },
      margin: {
        'blog': '0 auto',
        'cv2XL': '0 30rem',
        'cvXL': '0 14rem',
        'cvLg': '1rem 10rem',
        'cvMd': '0.5rem 4rem',
      },
      padding: {
        'cv': '0 1.5rem'
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
