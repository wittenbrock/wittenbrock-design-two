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
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" />
          </marker>
        </defs>
        <line
          x1="0"
          y1={dividerHeight}
          x2="0"
          y2="0"
          strokeWidth={6}
          stroke-dasharray={dividerHeight}
          stroke-dashoffset={-dividerHeight}
          css={draw}
          marker-end="url(#arrowhead)"
        />
      </svg>
    );
  }

  // If it's a subsequent visit, do not animate the line
  return (
    <svg
      style={{ position: 'absolute' }}
      xmlns="http://www.w3.org/2000/svg"
      stroke={tailwindColors.gray[700]}
      height={dividerHeight}
      width="20"
      viewbox={`0 0 20 ${dividerHeight}`}
    >
      <defs>
        <marker
          id="dot"
          viewBox="0 0 10 10"
          refX="7"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
          stroke={tailwindColors.gray[700]}
          fill={tailwindColors.white}
          strokeWidth={2}
        >
          <circle cx="5" cy="5" r="2" />
        </marker>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          markerWidth="3"
          markerHeight="3"
          refX="3"
          refY="5"
          orient="auto"
          stroke="none"
          fill={tailwindColors.gray[700]}
        >
          {/* points="0 0, 5 10, 10 0" */}
          <polygon points="0 5, 10 10, 10 0" />
        </marker>
      </defs>
      <line
        x1="10"
        y1={dividerHeight - 5}
        x2="10"
        y2="5"
        strokeWidth={6}
        marker-end="url(#dot)"
        marker-start="url(#arrowhead)"
      />
    </svg>
  );
}
