import React from 'react';
import { keyframes } from '@emotion/react';
import { css } from 'twin.macro';

import tailwindColors from '../../tailwind-colors';

// Create the animation that "draws" the gray dividing line
const drawKeyframe = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const draw = css`
  animation: ${drawKeyframe} 3s 4s ease-in forwards;
`;

// Create the gray dividing line that runs down the center of the homepage
export default function GrayDivider(props) {
  const { dividerHeight, isFirstVisit } = props;

  // "Draw" the line if it's the user's first visit to the site
  if (isFirstVisit) {
    return (
      <svg
        style={{ position: 'absolute' }}
        xmlns="http://www.w3.org/2000/svg"
        stroke={tailwindColors.gray[600]}
        height={dividerHeight}
        width="6"
      >
        <line
          x1="0"
          y1={dividerHeight}
          x2="0"
          y2="0"
          strokeWidth={6}
          stroke-dasharray={dividerHeight}
          stroke-dashoffset={-dividerHeight}
          css={draw}
        />
      </svg>
    );
  }

  // If it's a subsequent visit, do not animate the line
  return (
    <svg
      style={{ position: 'absolute' }}
      xmlns="http://www.w3.org/2000/svg"
      stroke={tailwindColors.gray[600]}
      height={dividerHeight}
      width="6"
    >
      <line x1="0" y1={dividerHeight} x2="0" y2="0" strokeWidth={6} />
    </svg>
  );
}
