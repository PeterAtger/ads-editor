import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx', '@repo/ui/components/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      colors: {
        primary: '#09090B',
        light: '#71717A',
        foreground: '#FFF',
        background: '#F5F4F5',
      },
    },
  },
  plugins: [],
} satisfies Config;
