/* A wrapper components that applies Tailwind's pre-flight base styles:
 * https://unpkg.com/tailwindcss@2.0.1/dist/base.css
 *
 * Emotion's global component: https://emotion.sh/docs/globals
 *
 * This component was created following Twin Macro configuration example:
 * https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-emotion
 */

import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles, css } from 'twin.macro'; // Tailwind's global styles
import { Global } from '@emotion/react';

import tailwindColors from '../../tailwind-colors';

import LeagueSpartanBoldWoff from '../fonts/leaguespartan-bold.woff';
import LeagueSpartanBoldWoff2 from '../fonts/leaguespartan-bold.woff2';
import SailecBoldWoff from '../fonts/Sailec-Bold.woff';
import SailecBoldWoff2 from '../fonts/Sailec-Bold.woff2';
import SailecMediumWoff from '../fonts/Sailec-Medium.woff';
import SailecMediumWoff2 from '../fonts/Sailec-Medium.woff2';
import SailecRegularWoff from '../fonts/Sailec-Regular.woff';
import SailecRegularWoff2 from '../fonts/Sailec-Regular.woff2';
import SourceCodeProWoff from '../fonts/source-code-pro-v11-latin-regular.woff';
import SourceCodeProWoff2 from '../fonts/source-code-pro-v11-latin-regular.woff2';

import CameraIcon from '../icons/camera.svg';

// Add global CSS styles to this variable below
const globalCSS = css`
  @font-face {
    font-family: 'Sailec Regular';
    font-style: normal;
    font-weight: 400;
    src: local("Sailec Regular'), local('Sailec-Regular"),
      url('${SailecRegularWoff2}') format('woff2'),
      url('${SailecRegularWoff}') format('woff');
  }

  @font-face {
    font-family: 'Sailec Medium';
    font-style: normal;
    font-weight: 600;
    src: local('Sailec Medium'), local('Sailec-Medium'),
      url('${SailecMediumWoff2}') format('woff2'),
      url('${SailecMediumWoff}') format('woff');
  }

  @font-face {
    font-family: 'Sailec Bold';
    font-style: normal;
    font-weight: 800;
    src: local('Sailec Bold'), local('Sailec-Bold'),
      url('${SailecBoldWoff2}') format('woff2'),
      url('${SailecBoldWoff}') format('woff');
  }

  @font-face {
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 700;
    src: local('League Spartan Bold'), local('LeagueSpartan-Bold'),
      url('${LeagueSpartanBoldWoff2}') format('woff2'),
      url('${LeagueSpartanBoldWoff}') format('woff');
  }

  @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 400;
    src: local('Source Code Pro Regular'), local('SourceCodePro-Regular'),
      url('${SourceCodeProWoff2}') format('woff2'),
      url('${SourceCodeProWoff}') format('woff');
  }

  html {
    background-color: ${tailwindColors.indigo.darkest};
    font-size: 100%;
    font-family: 'Sailec Regular', sans-serif;
    font-weight: 400;
    height: 100%;
  }

  /* Tailwind.config has a hard time with content: url() */
  figcaption::before {
    content: url('${CameraIcon}');
    height: 1em;
    width: 1.75em;
    padding-right: 0.6em;
    display: table-cell;
    vertical-align: baseline;
    position: relative;
    top: 0.2em;
  }

  /* Firefox scrollbar styles */
  html {
    scrollbar-color: ${tailwindColors.gray[600]} #2d3748;
  }

  /* Google Chrome scrollbar styles */
  ::-webkit-scrollbar-track {
    background: #2d3748;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  ::-webkit-scrollbar {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background: #2d3748;
  }

  ::-webkit-scrollbar-thumb {
    background: ${tailwindColors.gray[600]};
    border-radius: 9999px;
  }

  /* Make sure Prism's comment color meets accessibility standards */
  span.token.comment {
    color: ${tailwindColors.gray[400]};
  }
`;

export default function PageWrapper(props) {
  const { children } = props;

  return (
    <div>
      <GlobalStyles />
      <Global styles={globalCSS} />
      {children}
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
