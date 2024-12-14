/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          gold: {
            300: '#ffd700',
            400: '#ffcc00',
            500: '#ffb300',
            600: '#ffa500',
          },
        },
      },
    },
    plugins: [],
  };