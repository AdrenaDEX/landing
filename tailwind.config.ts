import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        titletext: ['titletext'],
        regulartext: ['regulartext'],
      },
      fontSize: {
        xs: '0.875rem', // Extra Small
        sm: '1rem', // Small
        base: '1.125rem', // Base
        lg: '1.25rem', // Large
        xl: '1.5rem', // Extra Large
        '2xl': '1.875rem', // 2 Extra Large
        '3xl': '2.25rem', // 3 Extra Large
        '4xl': '2.625rem', // 4 Extra Large
        '5xl': '2.8rem', // 5 Extra Large
        '6xl': '3rem', // 6 Extra Large
      },
    },
  },
  plugins: [],
};
export default config;
