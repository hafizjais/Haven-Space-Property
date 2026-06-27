/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F6F5',
          100: '#E6EBE9',
          200: '#CBD6D2',
          300: '#A4B7B0',
          400: '#7C968D',
          500: '#4A6358', // Primary Sage Green
          600: '#3D5249',
          700: '#30413A',
          800: '#23302B',
          900: '#161F1B',
        },
        terracotta: {
          50: '#FAF2EF',
          100: '#F4E0D7',
          200: '#EABFA9',
          300: '#DF9D7B',
          400: '#D47E53',
          500: '#C97C5D', // Accent Terracotta
          600: '#B06546',
          700: '#904F34',
          800: '#703B23',
          900: '#502613',
        },
        cream: {
          50: '#FCFAF7',
          100: '#FAF6F1', // Neutral Background
          200: '#F3EAE0',
          300: '#EBDDCF',
          400: '#DFCEBD',
          500: '#D3BEAA',
          600: '#B59D86',
          700: '#957C64',
          800: '#755D46',
          900: '#55402D',
        },
        charcoal: {
          DEFAULT: '#2D2A26', // Text Color
          50: '#F7F7F6',
          100: '#ECECEB',
          200: '#D3D2D0',
          300: '#B9B7B4',
          400: '#A09C99',
          500: '#86817D',
          600: '#6C6763',
          700: '#534E4B',
          800: '#393431',
          900: '#2D2A26',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
