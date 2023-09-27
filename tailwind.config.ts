import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { 'opacity': '0', 'height': '0', 'z-index': '-10' },
          '1%': { 'height': '100%', 'z-index': '40' },
          '100%': { 'opacity': '0.4', 'height': '100%', 'z-index': '40' },
        },
        fadeout: {
          '0%': { 'opacity': '0.4', 'height': '100%', 'z-index': '40' },
          '99%': { 'height': '100%', 'z-index': '40' },
          '100%': { 'opacity': '0', 'height': '0', 'z-index': '-10' },
        },
      },
      animation: {
        fadeout: 'fadeout 0.3s cubic-bezier(0.3, 0, 0.7, 0.4) both',
        fadein: 'fadein 0.4s cubic-bezier(0.33, 0.45, 0, 1) both',
      },
    },
  },
  plugins: [],
};
export default config;
