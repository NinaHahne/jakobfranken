import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['SourceSans3', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],

        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        bevan: ['Bevan', 'cursive'],
      },
      colors: {
        softwhite: '#fefcfb', // Soft White
        softblack: '#0d0d0d', // Soft Black

        mediumblue: '#43579b',
        darkblue: '#272c6b',
      },
    },
  },

  plugins: [
    typography,
    forms,
    containerQueries,
    function ({ addVariant }: { addVariant: (name: string, definition: string) => void }) {
      // Prevents hover sticking on touch devices
      // NOTE: the following media queries work fine to detect hover properly on iPhones but not on Android devices:
      // (any-hover: none) / (hover: none) / (hover: hover)
      // only the following works on iPhones & Android:
      addVariant('hoverable', '@media (any-hover: hover) and (pointer: fine)');
      addVariant('not-hoverable', '@media (hover: none), (pointer: coarse)');
    },
  ],
} satisfies Config;
