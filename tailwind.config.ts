module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // if you use the app directory
    "./pages/**/*.{js,ts,jsx,tsx}",     // if you use pages directory
    "./components/**/*.{js,ts,jsx,tsx}" // includes components/home
  ],
  theme: {
    extend: {
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
      animation: {
        bounceSlow: 'bounceSlow 2s infinite',
      },
    },
  },
  plugins: [],
};
