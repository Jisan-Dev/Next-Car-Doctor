import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#FF3811',
          // secondary: 'teal',
          // warning: 'CYAN',
          '.btn-outline.btn-primary:hover': {
            color: '#FFF ',
          },
          '.btn-primary': {
            color: '#FFF',
          },
        },
      },
    ],
  },
};
