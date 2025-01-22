/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export const darkMode = 'class';
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      bg: {
        DEFAULT: 'hsl(var(--background))', // Use CSS variable for dynamic theming
        secondary: 'hsl(var(--secondary))',
      },
      text: {
        DEFAULT: 'hsl(var(--foreground))', // Use CSS variable for dynamic theming
        dark: '#1F2937', // Dark text for light mode
      },
      accent: '#6366F1', // Accent color
      success: '#22C55E',
      warning: '#FACC15',
      error: '#EF4444',
      divider: '#3F3F3F',
      disabled: '#6B7280',
      buttonHover: '#4F46E5',
      inputFocus: '#6366F1',
    },
    // Light theme colors
    lightTheme: {
      bg: {
        DEFAULT: '#FFFFFF', // Light mode background
        secondary: '#F9FAFB',
      },
      text: '#1F2937',
      accent: '#4F46E5',
      divider: '#E5E7EB',
      disabled: '#D1D5DB',
    },
  },
};
export const plugins = [
  plugin(({ addBase }) => {
    addBase({
      ':root': {
        '--background': '#FFFFFF', // Light mode background
        '--foreground': '#1F2937', // Light mode text
        '--secondary': '#F9FAFB', // Light mode secondary background
        // Add other CSS variables for light theme colors here
      },
      '.dark': {
        '--background': '#1F1F1F', // Dark mode background
        '--foreground': '#FFFFFF', // Dark mode text
        '--secondary': '#2C2C2C', // Dark mode secondary background
        // Add other CSS variables for dark theme colors here
      },
    });
  }),
];
