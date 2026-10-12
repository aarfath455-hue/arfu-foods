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
        // Rich Cocoa Brown (Primary Brand Dark/Accent)
        cocoa: {
          950: '#140D09',
          900: '#1F140E',
          800: '#2C1810',
          700: '#3D2314',
          600: '#4F2E1A',
          500: '#6B4025',
          400: '#8C5734',
        },
        // Warm Cream & Ivory (Light Mode Surfaces)
        cream: {
          25: '#FFFEFA',
          50: '#FDFCF7',
          100: '#FAF7F0',
          200: '#F5EFE3',
          300: '#EBDDC9',
          400: '#DCC8AE',
          DEFAULT: '#FAF7F0',
        },
        // Elegant Muted Gold
        gold: {
          50: '#FCF9EE',
          100: '#F9F2D8',
          200: '#F2E3AF',
          300: '#E8D080',
          400: '#DDBB55',
          DEFAULT: '#C5A059',
          500: '#C5A059',
          600: '#B0883C',
          700: '#8E6B2C',
        },
        // Rich Charcoal (Dark Mode Surfaces)
        charcoal: {
          950: '#100E0D',
          900: '#161311',
          850: '#1C1815',
          800: '#241F1B',
          750: '#2C2621',
          700: '#352E28',
          600: '#483F37',
        },
        // Forest & Olive (South Indian heritage tone)
        forest: {
          950: '#060F0A',
          900: '#0A1710',
          850: '#0E1F16',
          800: '#13281D',
          700: '#1B3628',
        },
        // Veg / Non-Veg Accents
        badge: {
          veg: '#15803D',
          nonveg: '#DC2626',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tighter-dramatic': '-0.04em',
        'widest-editorial': '0.2em',
        'ultra-wide': '0.3em',
      },
      boxShadow: {
        'card-light': '0 4px 20px -2px rgba(61, 35, 20, 0.06), 0 2px 6px -1px rgba(61, 35, 20, 0.04)',
        'card-light-hover': '0 16px 32px -4px rgba(61, 35, 20, 0.12), 0 4px 12px -2px rgba(61, 35, 20, 0.06)',
        'card-dark': '0 4px 24px -2px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
        'card-dark-hover': '0 16px 36px -4px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(197, 160, 89, 0.3)',
        'gold-glow': '0 0 25px -4px rgba(197, 160, 89, 0.35)',
        'whatsapp-glow': '0 8px 24px -4px rgba(37, 211, 102, 0.4)',
      },
    },
  },
  plugins: [],
}
