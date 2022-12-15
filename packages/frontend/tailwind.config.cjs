/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../ui/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sp-cabin': 'Cabin',
      'sp-noto-serif-kr': 'Noto Serif KR',
    },

    extend: {
      colors: {
        'sp-accent': 'hsl(var(--accent) / <alpha-value>)',
        'sp-accent-contrast': 'hsl(var(--primary) / <alpha-value>)',
        'sp-primary': 'hsl(var(--primary) / <alpha-value>)',
        'sp-neutral-200': 'hsl(var(--neutral-200) / <alpha-value>)',
        'sp-neutral-500': 'hsl(var(--neutral-500) / <alpha-value>)',
        'sp-accent-600': 'hsl(var(--accent-600) / <alpha-value>)',
        'sp-primary-contrast': 'hsl(var(--primary-contrast) / <alpha-value>)',
        'sp-primary-400': 'hsl(var(--primary-400) / <alpha-value>)',
        'sp-neutral-100': 'hsl(var(--neutral-100) / <alpha-value>)',
        'sp-neutral-300': 'hsl(var(--neutral-300) / <alpha-value>)',
      },
      fontSize: {
        'sp-16': '16px',
        'sp-48': '48px',
      },
      boxShadow: {},
      borderRadius: {
        md: '4px',
      },
      gridTemplateRows: {
        body: 'min-content 1fr',
      },
    },
  },
};
