/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'black-90': 'rgba(0, 0, 0, 0.9)',
      'black-80': 'rgba(0, 0, 0, 0.8)',
      'black-70': 'rgba(0, 0, 0, 0.7)',
      'black-60': 'rgba(0, 0, 0, 0.6)',
      'black-50': 'rgba(0, 0, 0, 0.5)',
      'black-40': 'rgba(0, 0, 0, 0.4)',
      'black-30': 'rgba(0, 0, 0, 0.3)',
      'black-20': 'rgba(0, 0, 0, 0.2)',
      'black-10': 'rgba(0, 0, 0, 0.1)',
      'black-5': 'rgba(0, 0, 0, 0.05)',

      'blue-900': '#000D1A',
      'blue-800': '#00192F',
      'blue-700': '#032340',
      'blue-600': '#003362',
      'blue-500': '#00437F',
      'blue-400': '#1C5B96',
      'blue-300': '#3877B2',
      'blue-200': '#79B1E2',
      'blue-100': '#CFE2F2',
      'blue-50':'#F7F9FB',

      'slate-900': '#111729',
      'slate-800': '#20293A',
      'slate-700': '#364153',
      'slate-600': '#4A5567',
      'slate-500': '#677389',
      'slate-400': '#97A2B6',
      'slate-300': '#CDD5E0',
      'slate-200': '#E3E8EF',
      'slate-100': '#F2F5F9',
      'slate-50': '#F8FAFC',

      'red-900': '#752522',
      'red-800': '#8C2822',
      'red-700': '#AA2E26',
      'red-600': '#CA3A31',
      'red-500': '#DD524C',
      'red-400': '#E77975',
      'red-300': '#F0A9A7',
      'red-200': '#F6CCCB',
      'red-100': '#F9E3E2',
      'red-50': '#FCF2F2',

      'green-900': '#285231',
      'green-800': '#306339',
      'green-700': '#3C7E44',
      'green-600': '#4CA154',
      'green-500': '#5EC269',
      'green-400': '#77DB89',
      'green-300': '#9FECB1',
      'green-200': '#C7F5D3',
      'green-100': '#E2FBE8',
      'green-50': '#F2FDF5',

      'yellow-900': '#6A411C',
      'yellow-800': '#7D501F',
      'yellow-700': '#986523',
      'yellow-600': '#C18D30',
      'yellow-500': '#E1B53E',
      'yellow-400': '#F3CE49',
      'yellow-300': '#F8E164',
      'yellow-200': '#FCF097',
      'yellow-100': '#FDF9C9',
      'yellow-50': '#FEFCEA',

      'white': '#FFFFFF',
      'white-90': 'rgba(255, 255, 255, 0.9)',
      'white-80': 'rgba(255, 255, 255, 0.8)',
      'white-70': 'rgba(255, 255, 255, 0.7)',
      'white-60': 'rgba(255, 255, 255, 0.6)',
      'white-50': 'rgba(255, 255, 255, 0.5)',
      'white-40': 'rgba(255, 255, 255, 0.4)',
      'white-30': 'rgba(255, 255, 255, 0.3)',
      'white-20': 'rgba(255, 255, 255, 0.2)',
      'white-10': 'rgba(255, 255, 255, 0.1)',

      'stroke-40': 'rgba(121, 177, 226, 0.4)'
    },

    extend: {
      fontFamily: {
        'sans' : ['Inter'],
        'display': ['Space Grotesk']
      },

      boxShadow: {
        '3xl': '4px 4px 16px rgba(0, 67, 127, 0.15)',
        'nav': '0px 8px 16px rgba(8, 71, 128, 0.10)',
      },

      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 5s infinite',
        'pulse-slow': 'pulse 6s infinite',
      }
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}