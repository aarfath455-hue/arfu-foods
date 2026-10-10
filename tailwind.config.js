/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#060F0A',
          900: '#0A1710',
          850: '#0E1F16',
          800: '#13281D',
          700: '#1B3628',
          600: '#254936',
          500: '#325F47',
        },
        olive: {
          900: '#141E14',
          800: '#1E2D1F',
          700: '#2A3D2B',
          600: '#3A523C',
        },
        limeAccent: {
          300: '#BEF264',
          400: '#A3E635',
          DEFAULT: '#9FE870',
          500: '#84CC16',
        },
        sageAccent: {
          300: '#A3C9A8',
          DEFAULT: '#7CA982',
          600: '#5E8B65',
        },
        cream: {
          50: '#FDFCF7',
          100: '#FAF7F0',
          200: '#F5EFE3',
          300: '#EBDDC9',
          400: '#DCC8AE',
          DEFAULT: '#FAF7F0',
        },
        terracotta: {
          DEFAULT: '#E06A3B',
          600: '#C85A32',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tighter-dramatic': '-0.05em',
        'widest-editorial': '0.25em',
        'ultra-wide': '0.35em',
      },
      boxShadow: {
        'pill': '0 20px 40px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
        'pill-hover': '0 25px 50px -10px rgba(159, 232, 112, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
        'glow-lime': '0 0 35px -5px rgba(159, 232, 112, 0.25)',
      },
    },
  },
  plugins: [],
}
