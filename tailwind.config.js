module.exports = {
  theme: {
    fontFamily: {
      heading: [`League Spartan`, `sans-serif`],
      subheading: [`Sailec Medium`, `sans-serif`],
      body: [`Sailec Regular`, `sans-serif`],
    },
    typography: {
      default: {
        css: {
          a: {
            position: `relative`,
            color: `#fff`,
            textDecoration: `none`,
            fontFamily: `Sailec Bold`,
            fontWeight: `800`,
            outline: `0`,
            appearance: `none`,

            '&::before': {
              content: `""`,
              position: `absolute`,
              top: `0.9em`,
              right: `0`,
              height: `0.15em`,
              zIndex: `10`,
              backgroundColor: `#e06c52`,
              width: `100%`,
              left: `0`,
            },
            '&::after': {
              content: `""`,
              position: `absolute`,
              top: `0.9em`,
              right: `0`,
              height: `0.15em`,
              zIndex: `20`,
              backgroundColor: `#6574cd`,
              transition: `all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1)`,
              width: `0`,
            },
            '&:hover::after': {
              width: `100%`,
              left: `0`,
            },
            '&:focus::after': {
              width: `100%`,
              left: `0`,
              backgroundColor: `#37a5eb`,
            },
          },
          p: {
            color: `#d2d6dc`,
            fontFamily: `Sailec Regular`,
            fontWeight: `400`,
          },
          h1: {
            color: `#fff`,
            fontFamily: `League Spartan`,
            fontWeight: `700`,
          },
          h2: {
            color: `#fff`,
            fontFamily: `League Spartan`,
            fontWeight: `700`,
          },
          h3: {
            color: `#fff`,
            fontFamily: `League Spartan`,
            fontWeight: `700`,
          },
          h4: {
            color: `#fff`,
            fontFamily: `League Spartan`,
            fontWeight: `700`,
          },
          pre: {
            color: `#d2d6dc`,
          },
          'pre code': {
            fontFamily: `Source Code Pro`,
          },
          code: {
            color: `#d2d6dc`,
            fontFamily: `Source Code Pro`,
            fontWeight: 400,
            backgroundColor: `#2d3748`,
            display: `inline-block`,
            padding: `0.2em 0.5em`,
            borderRadius: `0.25rem`,
          },
          'code::before': {
            content: `""`,
          },
          'code::after': {
            content: `""`,
          },
          strong: {
            color: `#fff`,
            fontFamily: `Sailec Bold`,
            fontWeight: `800`,
          },
          blockquote: {
            color: `#fff`,
            borderLeftColor: `#6b7280`,
          },
          'blockquote p': {
            color: `#fff`,
          },
          figcaption: {
            color: `#fff`,
            fontStyle: `italic`,
            display: `table`,
            padding: `0.75em 2em 0.75em 0`,
            margin: `0 auto`,
            wordBreak: `break-word`,
          },
          'ol li': {
            color: `#d2d6dc`,
          },
          'ol > li::before': {
            color: `#6b7280`,
          },
          'ul li': {
            color: `#d2d6dc`,
          },
          'ul > li::before': {
            backgroundColor: `#6b7280`,
          },
          kbd: {
            color: `#fff`,
            fontFamily: `Source Code Pro`,
            fontWeight: 400,
            fontSize: `0.8em`,
            padding: `0.3em 0.6em`,
            border: `1px solid #fff`,
            borderRadius: `0.125rem`,
            boxShadow: `1px 1px 0 #fff, 2px 2px 0 #fff`,
            margin: `0 0.25rem`,
          },
          img: {
            borderRadius: `0.5rem`,
          },
        },
      },
    },
    extend: {
      inset: {
        '0': `0`,
        '6': `0.375rem`,
        '10': `0.625rem`,
        '1/2': `50%`,
      },
      minHeight: {
        '112': `28rem`,
      },
    },
    colors: {
      inherit: `inherit`,
      transparent: `transparent`,
      white: `#fff`,
      black: `#000`,
      gray: {
        50: `#f9fafb`,
        100: `#f4f5f7`,
        200: `#e5e7eb`,
        300: `#d2d6dc`,
        400: `#9fa6b2`,
        500: `#6b7280`,
        600: `#4b5563`,
        700: `#374151`,
        800: `#252f3f`,
        900: `#161e2e`,
      },
      orange: {
        default: `#e06c52`,
        darker: `#d94726`,
      },
      blue: {
        lighter: `#00c1e6`,
        default: `#37a5eb`,
      },
      indigo: {
        default: `#6574cd`,
        darkest: `#1d1e26`,
      },
      red: {
        lightest: `#fed7d7`,
        default: `#e53e3e`,
        darker: `#c53030`,
      },
    },
  },
  plugins: [require(`@tailwindcss/ui`), require(`@tailwindcss/typography`)],
};
