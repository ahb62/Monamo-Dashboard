/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
//   daisyui: {
//     themes: [
//       {
// //         mytheme: {
        
// // "primary": "#FFDE00",

// // "primary-focus": "#D5A100",
      
// // "secondary": "#855ac9",

// // "secondary-focus": "#D5A100",
        
// // "accent": "#E54222",

// // "accent-focus": "#E54222",
        
// // "neutral": "#0C3348",
        
// // "base-100": "#EFFCD5",

// // "base-200": "#D5F0C4",

// // "base-300": "#B9E2B4",
        
// // "info": "#5EBDFC",
        
// // "success": "#37796C",
        
// // "warning": "#FB1B1B",
        
// // "error": "#DFDFDF",
// //         },
//       },
//     ],
//   },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
