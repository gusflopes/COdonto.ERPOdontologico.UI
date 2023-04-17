/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'appear-from-left': 'appearFromLeft 0.5s ease-out',
        'appear-from-right': 'appearFromRight 0.5s ease-out'
      },
      keyframes: {
        appearFromLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        appearFromRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms')
    ]
  }
}
