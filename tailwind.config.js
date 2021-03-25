/* Tailwind is managed by the package Twin Macro in this project.
 * Twin Macro combines the utlity of Emotion's CSS-in-JS with Tailwind
 *
 * Twin Macro API - https://github.com/ben-rogerson/twin.macro
 *
 * Twin Macro Configuration Example - https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-emotion
 */

const typography = require('@tailwindcss/typography');
const aspectRatio = require('@tailwindcss/aspect-ratio');

const tailwindColors = require('./tailwind-colors');

module.exports = {
  theme: {
    fontFamily: {
      heading: [`League Spartan`, `sans-serif`],
      subheading: [`Sailec Medium`, `sans-serif`],
      body: [`Sailec Regular`, `sans-serif`],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: tailwindColors.white,
              textDecoration: `none`,
              fontFamily: `Sailec Bold`,
              fontWeight: `800`,
              outline: `0`,
              appearance: `none`,
              backgroundImage: `linear-gradient(180deg,transparent 70%, ${tailwindColors.orange.DEFAULT} 0)`,
              '&:hover': {
                backgroundImage: `linear-gradient(180deg,transparent 70%, ${tailwindColors.indigo.DEFAULT} 0)`,
              },
              '&:focus': {
                backgroundImage: `linear-gradient(180deg,transparent 70%, ${tailwindColors.blue.DEFAULT} 0)`,
              },
            },
            figure: {
              borderRadius: `0.5rem`,
            },
            'figure a': {
              borderRadius: `0.5rem`,
              backgroundImage: `none`,
              '&:hover': {
                backgroundImage: `none`,
                cursor: `zoom-in`,
              },
              '&:focus': {
                backgroundImage: `none`,
              },
            },
            p: {
              color: tailwindColors.gray[300],
              fontFamily: `Sailec Regular`,
              fontWeight: `400`,
            },
            h1: {
              color: tailwindColors.white,
              fontFamily: `League Spartan`,
              fontWeight: `700`,
            },
            h2: {
              color: tailwindColors.white,
              fontFamily: `League Spartan`,
              fontWeight: `700`,
            },
            h3: {
              color: tailwindColors.white,
              fontFamily: `League Spartan`,
              fontWeight: `700`,
            },
            h4: {
              color: tailwindColors.white,
              fontFamily: `League Spartan`,
              fontWeight: `700`,
            },
            pre: {
              color: tailwindColors.gray[300],
            },
            'pre code': {
              fontFamily: `Source Code Pro`,
            },
            code: {
              color: tailwindColors.gray[300],
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
              color: tailwindColors.white,
              fontFamily: `Sailec Bold`,
              fontWeight: `800`,
            },
            blockquote: {
              color: tailwindColors.white,
              borderLeftColor: tailwindColors.gray[500],
            },
            'blockquote p': {
              color: tailwindColors.white,
            },
            figcaption: {
              color: tailwindColors.white,
              fontStyle: `italic`,
              display: `table`,
              padding: `0.75em 2em 0.75em 0`,
              margin: `0 auto`,
              wordBreak: `break-word`,
            },
            'ol li': {
              color: tailwindColors.gray[300],
            },
            'ol > li::before': {
              color: tailwindColors.gray[500],
            },
            'ul li': {
              color: tailwindColors.gray[300],
            },
            'ul > li::before': {
              backgroundColor: tailwindColors.gray[500],
            },
            kbd: {
              color: tailwindColors.white,
              fontFamily: `Source Code Pro`,
              fontWeight: 400,
              fontSize: `0.8em`,
              padding: `0.3em 0.6em`,
              border: `1px solid ${tailwindColors.white}`,
              borderRadius: `0.125rem`,
              boxShadow: `1px 1px 0 ${tailwindColors.white}, 2px 2px 0 ${tailwindColors.white}`,
              margin: `0 0.25rem`,
            },
            img: {
              borderRadius: `0.5rem`,
            },
          },
        },
      },
      inset: {
        0: `0`,
        6: `0.375rem`,
        10: `0.625rem`,
        '1/2': `50%`,
      },
      minHeight: {
        112: `28rem`,
      },
      minWidth: {
        112: `28rem`,
      },
      backgroundSize: {
        '0/2': '0% 2px',
        '0/7': '0% 7px',
        '100/2': '100% 2px',
        '100/7': '100% 7px',
        'auto/7': 'auto 7px',
      },
      transitionProperty: {
        'background-size': 'background-size',
      },
    },
    colors: tailwindColors,
  },
  plugins: [typography, aspectRatio],
};
