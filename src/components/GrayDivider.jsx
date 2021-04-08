import React from 'react';
import { keyframes } from '@emotion/react';
import { css } from 'twin.macro';

import tailwindColors from '../../tailwind-colors';

const drawKeyframe = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const draw = css`
  animation: ${drawKeyframe} 3s 4s ease-in forwards;
`;

export default function GrayDivider(props) {
  const { dividerHeight, isFirstVisit } = props;

  if (isFirstVisit) {
    return (
      <svg
        style={{ position: 'absolute' }}
        xmlns="http://www.w3.org/2000/svg"
        stroke={tailwindColors.gray[600]}
        height={dividerHeight}
        width="4"
      >
        <line
          x1="0"
          y1={dividerHeight}
          x2="0"
          y2="0"
          strokeWidth={4}
          stroke-dasharray={dividerHeight}
          stroke-dashoffset={-dividerHeight}
          css={draw}
        />
      </svg>
    );
  }

  return (
    <svg
      style={{ position: 'absolute' }}
      xmlns="http://www.w3.org/2000/svg"
      stroke={tailwindColors.gray[600]}
      height={dividerHeight}
      width="4"
    >
      <line x1="0" y1={dividerHeight} x2="0" y2="0" strokeWidth={4} />
    </svg>
  );
}
