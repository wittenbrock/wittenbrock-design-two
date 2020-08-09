module.exports = {
  theme: {
    fontFamily: {
      display: ['League Spartan', 'sans-serif'],
      'body-title': ['Sailec Medium', 'sans-serif'],
      body: ['Sailec Regular', 'sans-serif'],
    },
    typography: {
      default: {
        css: {
          a: {
            color: '#fff',
            textDecoration: 'none',
            fontFamily: 'Sailec Bold',
            fontWeight: '800',
            backgroundImage:
              'linear-gradient(180deg, transparent 85%, rgba(101, 116, 205) 0)',
          },
          p: {
            color: '#d2d6dc',
            fontFamily: 'Sailec Regular',
            fontWeight: '400',
          },
          h1: {
            color: '#fff',
            fontFamily: 'Sailec Medium',
            fontWeight: '800',
          },
          h2: {
            color: '#fff',
            fontFamily: 'Sailec Bold',
            fontWeight: '800',
          },
          h3: {
            color: '#fff',
            fontFamily: 'Sailec Medium',
            fontWeight: '600',
          },
          h4: {
            color: '#fff',
            fontFamily: 'Sailec Medium',
            fontWeight: '600',
          },
          pre: {
            color: '#d2d6dc',
          },
          'pre code': {
            fontFamily: 'Source Code Pro',
          },
          code: {
            color: '#d2d6dc',
            fontFamily: 'Source Code Pro',
            fontWeight: 700,
          },
          strong: {
            color: '#fff',
            fontFamily: 'Sailec Bold',
            fontWeight: '800',
          },
          blockquote: {
            color: '#fff',
            borderLeftColor: '#6b7280',
          },
          'blockquote p': {
            color: '#fff',
          },
          figcaption: {
            color: '#d2d6dc',
          },
          'ol li': {
            color: '#d2d6dc',
          },
          'ol > li::before': {
            color: '#6b7280',
          },
          'ul li': {
            color: '#d2d6dc',
          },
          'ul > li::before': {
            backgroundColor: '#6b7280',
          },
        },
      },
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      gray: {
        lighter: '#E5E7EB',
        default: '#9fa6b2',
        dark: '#6b7280',
        darker: '#4b5563',
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#252f3f',
        900: '#161e2e',
      },
      orange: {
        default: '#e06c52',
        darker: '#d94726',
      },
      blue: {
        lighter: '#00c1e6',
        default: '#37a5eb',
      },
      indigo: {
        default: '#6574CD',
        darkest: '#1d1e26',
      },
      red: {
        lightest: '#FED7D7',
        default: '#E53E3E',
        darker: '#C53030',
      },
    },
    inset: {
      '0': '0',
      '6': '0.375rem',
      '10': '0.625rem',
      '1/2': '50%',
    },
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
};
