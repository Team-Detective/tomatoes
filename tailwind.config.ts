import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        bannerLink: '#4A734E',
        bannerLinkText: '#F5F1DE',
        footerBackground: '#F5F1DE',
        dDayRed: '#F9DADA',
        dDayYellow: '#FCEFDA',
        dDayGreen: '#DBE3DC',
        dDayGray: '#D3D3D3',
        dDayTextRed: '#E24444',
        dDayTextYellow: '#F2AD48',
        dDayTextGreen: '#4A734E',
        dDayTextGray: '#7A7A7A',
        searchBorder: '#E24444',
        mainBlack: '#222222',
        textGray: '#4E4E4E',
        'main-beige': '#F5F1DE',
        'point-red-100': '#F9DADA',
        'point-red-500': '#E24444',
        'point-green-100': '#DBE3DC',
        'point-green-500': '#4A734E',
        'sub-yellow-100': '#FCEFDA',
        'sub-yellow-500': '#F2AD48',
        'sub-gray-100': '#D3D3D3',
        'sub-gray-200': '#A7A7A7',
        'sub-gray-300': '#7A7A7A',
        'sub-gray-400': '#4E4E4E',
        'sub-gray-500': '#222222',
      },
    },
  },
  plugins: [],
};
export default config;
