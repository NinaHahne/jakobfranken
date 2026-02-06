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

        // Album/Artwork Palette
        ink: '#272c6b', // sehr dunkles Blau (dein darkblue)
        denim: '#43579b', // mittleres Blau (dein mediumblue)
        mauve: '#da86a2', // rosa/mauve
        apricot: '#ffb760', // warmes, helles Orange (Akzent)
        tangerine: '#fa9b2c', // kräftigeres Orange (sparsam!)
        fog: '#b1b2b4', // neutrales Grau
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
