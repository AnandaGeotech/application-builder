/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export const darkMode = 'class';
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      primary: {
        500: '#6366F1', // Define your desired primary-500 color here
      },
      violet: {
        1: '#F4EFFE',
        9: '#8E7EFF',
        11: '#6C63FF',
      },
      mauve: {
        8: '#A79ABF',
      },
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
