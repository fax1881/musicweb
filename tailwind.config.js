/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-montserrat)'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF0000', // Ana sarı
          dark: '#CC0000',    // Koyu sarı
          light: '#FF4D4D',   // Açık sarı
          hover: '#FF4D4D',   // Hover durumu için sarı
          muted: '#FF000033', // Yarı saydam sarı
        },
        secondary: {
          DEFAULT: '#000000', // Ana siyah
          light: '#1A1A1A',   // Açık siyah
          dark: '#000000',    // Koyu siyah
          muted: '#00000099', // Yarı saydam siyah
        },
        accent: {
          yellow: '#FF0000',
          black: '#000000',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'yellow': '0 0 15px rgba(255, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
} 