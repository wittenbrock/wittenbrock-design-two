module.exports = {
  theme: {
    fontFamily: {
      display: ['League Spartan', 'sans-serif'],
      'body-title': ['Sailec Medium', 'sans-serif'],
      body: ['Sailec Regular', 'sans-serif'],
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
  plugins: [require('@tailwindcss/ui')],
};
