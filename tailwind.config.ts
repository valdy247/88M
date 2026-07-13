import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#121212',
        slate: {
          950: '#050606'
        },
        olive: {
          600: '#7a7f4d',
          700: '#60643d'
        },
        amber: {
          500: '#d97706',
          600: '#b45309'
        }
      },
      boxShadow: {
        glow: '0 10px 30px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
