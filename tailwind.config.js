// tailwind.config.js
module.exports = {
  future: {},
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  experimental: {
    darkModeVariant: true
  },
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        oren: '#FC4A1A',
        orenn: '#F5AF19'
      },
      fontFamily: {
        body: ['Nunito'],
      }
      
    },
  },
  variants: {},
  plugins: [],
}