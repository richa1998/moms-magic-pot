/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0C',
        card: 'rgba(28, 28, 32, 0.4)',
        primary: '#FF5C00',
        secondary: '#FF1B1C',
        accent: 'rgba(255, 92, 0, 0.1)',
        text: '#FFFFFF',
        subtext: '#A1A1AA',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 22px rgba(255, 92, 0, 0.3)',
        glow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
      },
    },
  },
  plugins: [],
}
