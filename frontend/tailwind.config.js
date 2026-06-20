/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#F5E27A',
          400: '#E8C84A',
          500: '#D4AF37',
          600: '#B8960C',
          700: '#9A7C0A',
        },
        dark: {
          900: '#111111',
          950: '#0a0a0a',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5E27A 50%, #B8960C 100%)',
      },
    },
  },
  plugins: [],
}
