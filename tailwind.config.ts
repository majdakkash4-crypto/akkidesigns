import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'glass': 'rgba(255,255,255,0.1)',
        'glass-border': 'rgba(255,255,255,0.2)',
        'accent': '#22d3ee', // cyan-400
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
};
export default config;
