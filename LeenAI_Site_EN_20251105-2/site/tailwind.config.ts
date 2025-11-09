import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#00AEBF',
          dark: '#0B3D5C',
        },
      },
      backgroundImage: {
        'leenai-hero': 'linear-gradient(135deg, #00AEBF 0%, #0B3D5C 100%)',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
}

export default config

