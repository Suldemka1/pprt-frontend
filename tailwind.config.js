/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  lightMode: ['class', '[data-theme="light"]'],
  a1Mode: ['class', '[font-size="A1"]'],
  a2Mode: ['class', '[font-size="A2"]'],
  a3Mode: ['class', '[font-size="A3"]'],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
    screens: {
      'xs': '320px',

      'sm': '560px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1024px',

      '2xl': '1280px',
    }
  },
  plugins: [],
}
