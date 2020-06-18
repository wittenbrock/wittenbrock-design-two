module.exports = {
  theme: {
    extend: {
      height: {
        '1/3': '33.333333%',
        '2/3': '66.666666%',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
    fontFamily: {
      display: ['Spartan', 'sans-serif'],
      body: ['Noto Sans JP', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      gray: {
        lighter: '#F1F5F8',
        default: '#B8C2CC',
        darker: '#606F7B',
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
    },
    inset: {
      '0': '0',
      '6': '0.375rem',
      '10': '0.625rem',
      '1/2': '50%',
    },
  },
};
