/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f1724',
        accent: {
          DEFAULT: '#14b8a6',
        }
      },
      backgroundImage: {
        'hero-grad': 'radial-gradient(800px 400px at 10% 10%, rgba(20,184,166,0.12), transparent), radial-gradient(700px 350px at 90% 90%, rgba(124,58,237,0.08), transparent)'
      }
    },
  },
  plugins: [],
}
