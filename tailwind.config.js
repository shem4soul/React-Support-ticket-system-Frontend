/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        kraft: {
          DEFAULT: '#F0EAD9',
          dark: '#E4DAC1',
        },
        ink: {
          DEFAULT: '#1E2337',
          light: '#3A4160',
        },
        postal: {
          blue: '#2C4270',
          red: '#C1502E',
        },
        stamp: {
          low: '#5C8A64',
          medium: '#D98E3B',
          high: '#C1502E',
        },
      },
      backgroundImage: {
        'kraft-fiber':
          'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.02) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(0,0,0,0.02) 0, transparent 45%)',
      },
    },
  },
  plugins: [],
}
