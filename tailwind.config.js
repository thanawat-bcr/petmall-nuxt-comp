/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: 'Anantason, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      colors: {
        primary: {
          100: '#ecf8ff',
          200: '#c5d1e0',
          300: '#a2b5cd',
          400: '#5d7ea7',
          500: '#174681',
          600: '#153f74',
          700: '#113561',
          800: '#0e2a4d',
          900: '#0b223f',
        },
        secondary: {
          100: '#fef7e8',
          200: '#feebc6',
          300: '#fddfa4',
          400: '#fbc65f',
          500: '#f9ae1b',
          600: '#e09d18',
          700: '#bb8314',
          800: '#956810',
          900: '#7a550d',
        },
      },
    },
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
