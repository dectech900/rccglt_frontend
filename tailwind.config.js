/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e8f0f8',
          100: '#c5d8ed',
          200: '#9fbfe1',
          300: '#79a6d5',
          400: '#5992cc',
          500: '#3a7fc3',
          600: '#1a5fa5',
          700: '#1a3a5c',
          800: '#122b45',
          900: '#0d1f33',
        },
        gold: {
          300: '#f0d060',
          400: '#e0b830',
          500: '#c9a227',
          600: '#a8831f',
          700: '#886419',
        },
        cream: '#f8f6f1',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
