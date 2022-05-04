module.exports = {
  theme: {
    screens: {
      sm: '320px',
      md: '600px',
      lg: '1024px',
    },
    container: {
      center: true,
      screens: {
        'sm': '320px',
        'md': '600px',
        'lg': '1136px',
      },
    },

    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        900: '#121127',
        800: '#201F37',
        700: '#383751',
        600: '#4C4B63',
        500: '#6C6B80',
        400: '#9D9CAF',
        300: '#D1D1DB',
        200: '#E5E5EB',
        100: '#F7F7F8',
        50: '#F9F9FB',
      },
      'gray-opacity': {
        72: 'rgba(18, 17, 39, 0.72)',
        56: 'rgba(18, 17, 39, 0.56)',
        48: 'rgba(18, 17, 39, 0.48)',
        40: 'rgba(18, 17, 39, 0.40)',
        32: 'rgba(18, 17, 39, 0.32)',
        24: 'rgba(18, 17, 39, 0.24)',
        20: 'rgba(18, 17, 39, 0.20)',
        16: 'rgba(18, 17, 39, 0.16)',
        12: 'rgba(164, 163, 185, 0.12)',
        8: 'rgba(81, 81, 88, 0.08)',
      },
      green: {
        900: '#5BA093',
        800: '#68AFAB',
        700: '#7AB6AB',
        600: '#7AC7B8',
        500: '#A0D1C8',
        400: '#E8F9F6',
      },
      orange: {
        900: '#F67E5E',
        800: '#FB8F72',
        700: '#FFA58D',
        600: '#FFD0C3',
        500: '#FFEFEB',
      },
      success: {
        900: '#05523C',
        800: '#065F46',
        700: '#047857',
        600: '#059669',
        500: '#10B981',
        400: '#34D399',
        300: '#6EE7B7',
        200: '#A7F3D0',
        100: '#D1FAE5',
        50: '#E3F4EC',
      },
      warn: {
        900: '#FC7125',
        800: '#FF8127',
        700: '#FF9129',
        600: '#FF9E2A',
        500: '#FFB051',
        400: '#FFAC3D',
        300: '#FFBC5D',
        200: '#FFC187',
        100: '#FFE7C7',
        50: '#FFF4E6',
      },
      alert: {
        900: '#991B1B',
        800: '#B91C1C',
        700: '#DC2626',
        600: '#EF4444',
        500: '#F87171',
        400: '#FF8C8C',
        300: '#FCA5A5',
        200: '#FECACA',
        100: '#FEE2E2',
        50: '#FEF2F2',
      },
    },

    extend: {
      opacity: {
        '72': '0.72',
        '56': '0.56',
        '48': '0.48',
        '40': '0.40',
        '32': '0.32',
        '24': '0.24',
        '20': '0.20',
        '16': '0.16',
        '12': '0.12',
        '8': '0.08',
        '4': '0.04',
      }
    }
  },

  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      backgroundOpacity: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
      textOpacity: ['active', 'disabled'],
      borderColor: ['active', 'disabled'],
      borderOpacity: ['active', 'disabled'],
      opacity: ['active', 'disabled'],
    }
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
