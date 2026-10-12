/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Forest Green (Heritage South Indian Ambience)
        forest: {
          950: '#05110A',
          900: '#081A10',
          850: '#0D2418',
          800: '#133020',
          750: '#193D2A',
          700: '#214D35',
          600: '#2D6647',
        },
        // Warm Wood & Dark Mahogany (Pedestal & Shadow Tone)
        wood: {
          950: '#0F0906',
          900: '#180E09',
          850: '#22140D',
          800: '#2E1B12',
          750: '#3A2318',
          700: '#482D1F',
          600: '#5C3A29',
        },
        // Antique Gold & Brass Accents
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D5',
          200: '#EEDDA7',
          300: '#E4CA78',
          400: '#DAB650',
          DEFAULT: '#C5A059',
          500: '#C5A059',
          600: '#AA853D',
          700: '#89682C',
          800: '#694F21',
        },
        // Warm Amber Lighting & Lantern Glow
        amberGlow: {
          light: '#FDE68A',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          deep: '#B45309',
        },
        // Warm Cream & Ivory (Light Mode Surfaces)
        cream: {
          25: '#FFFEFA',
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F4ECE0',
          300: '#EADBC7',
          400: '#DDC6AA',
          DEFAULT: '#FAF6EE',
        },
        // Charcoal & Pure Black (Dark Mode Foundations)
        charcoal: {
          950: '#080A09',
          900: '#0E1110',
          850: '#141816',
          800: '#1B201D',
          750: '#232925',
          700: '#2B322E',
        },
        // Veg / Non-Veg Indicators
        badge: {
          veg: '#15803D',
          nonveg: '#DC2626',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        '3d-card': '0 8px 30px -4px rgba(0, 0, 0, 0.45), 0 2px 8px -2px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        '3d-card-hover': '0 20px 45px -8px rgba(0, 0, 0, 0.65), 0 6px 16px -4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(197, 160, 89, 0.45)',
        '3d-card-light': '0 8px 30px -4px rgba(46, 27, 18, 0.08), 0 2px 8px -2px rgba(46, 27, 18, 0.04)',
        '3d-card-light-hover': '0 20px 40px -8px rgba(46, 27, 18, 0.15), 0 6px 16px -4px rgba(46, 27, 18, 0.08)',
        'gold-rim': '0 0 24px -2px rgba(197, 160, 89, 0.35)',
        'amber-lantern': '0 0 45px 5px rgba(245, 158, 11, 0.22)',
        'whatsapp-glow': '0 8px 24px -4px rgba(37, 211, 102, 0.4)',
      },
    },
  },
  plugins: [],
}
