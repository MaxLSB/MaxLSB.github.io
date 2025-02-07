/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with class strategy
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    extend: {
      colors: {
        'background-light': '#F7F6F3',      // Notion light background
        'background-dark': '#FFFFFF',       // Notion dark mode background
        
        // Light mode gray scale (approximations based on Notion’s palette)
        'grey-200-light': '#EBECED',        // Light gray background for elements
        'grey-400-light': '#9B9A97',        // Secondary text color
        'grey-600-light': '#37352F',        // Primary text color
        'grey-900-light': '#111111',        // Extra-dark accent (optional)
        
        // Dark mode gray scale (approximations)
        'grey-200-dark': '#454B4E',         // Dark mode secondary background
        'grey-400-dark': '#979A9B',         // Dark mode secondary text
        'grey-600-dark': '#FFFFFF',         // Dark mode primary text (white)
        'grey-900-dark': '#FAFAFA',          // Near-white accent for high contrast
        rose: '#FFFFFF',                    // Rose color for dark mode
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--background': theme('colors.background-light'),
          '--grey-200': theme('colors.grey-200-light'),
          '--grey-400': theme('colors.grey-400-light'),
          '--grey-600': theme('colors.grey-600-light'),
          '--grey-900': theme('colors.grey-900-light'),
          '--clr-rose': theme('colors.rose'), // Add the rose color variable for light mode
        },
        '.dark': {
          '--background': theme('colors.background-dark'),
          '--grey-200': theme('colors.grey-200-dark'),
          '--grey-400': theme('colors.grey-400-dark'),
          '--grey-600': theme('colors.grey-600-dark'),
          '--grey-900': theme('colors.grey-900-dark'),
          '--clr-rose': theme('colors.rose'), // Add the rose color variable for dark mode
        },
        body: {
          fontFamily: "'Inter', sans-serif",
          padding: '0 0.5rem',
          color: 'var(--grey-600)',
          backgroundColor: 'var(--background)',
        },
        h1: {
          fontSize: '3rem',
          lineHeight: '1',
        },
        'h1 + h2': {
          fontSize: '1.1rem',
          marginTop: '-1.4rem',
          opacity: '0.9',
          fontWeight: '400',
        },
        main: {
          maxWidth: '40rem',
          margin: '0 auto',
        },
        'p, li': {
          fontSize: '1rem',
          color: 'var(--grey-400)',
          opacity: '0.8',
        },
        li: {
          margin: '1rem 0',
        },
      });
    },
    function ({ addComponents, theme }) {
      addComponents({
        '.active-link': {
          backgroundColor: theme('colors.background-dark'),
          color: theme('colors.background-light'),
        },
      });
    },
  ],
};
