/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',  ],
  theme: {
    extend: { 
      colors: {
      bg: 'var(--color-bg)',
      'bg-secondary': 'var(--color-bg-secondary)',
      accent: 'var(--color-accent)',
      'accent-hover': 'var(--color-accent-hover)',
      danger: 'var(--color-danger)',
      text: 'var(--color-text)',
    },
    boxShadow: {
      solid: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    },
    gridTemplateColumns: {
      fluid: 'repeat(auto-fill, minmax(200px, 1fr))',
    },
  },
},
plugins: [],
};