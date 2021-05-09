import React from 'react';
import { keyframes } from '@emotion/react';
import PropTypes from 'prop-types';
import { css } from 'twin.macro';

import tailwindColors from '../../tailwind-colors';

export default function GrayDivider(props) {
  const { isFirstVisit, dividerHeight } = props;

  const draw = keyframes`
    to {
      stroke-dashoffset: 0;
    }
  `;

  const drawHorizontalLine = css`
    animation: ${draw} 0.25s linear 4.25s forwards;
  `;

  // Move the line and arrow outside of the svg's viewBox so that it's hidden
  const verticalLineOffScreen = css`
    transform: translateY(-${dividerHeight + 5}px);
  `;

  const moveVerticalLineKeyframes = keyframes`
    from {
      transform: translateY(-${dividerHeight + 5}px);
    }
    to {
      transform: translateY(0);
    }
  `;

  // Move the line and arrow into the view box after waiting 4.5s
  const moveVerticalLine = css`
    animation: ${moveVerticalLineKeyframes} 4s ease-in 4.5s forwards;
  `;

  const GrayDividerStatic = () => (
    <svg
      tw="absolute"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 20 ${dividerHeight + 10}`}
      width="20"
      height={dividerHeight}
    >
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          markerWidth="2"
          markerHeight="2"
          refX="5"
          refY="5"
          orient="-90deg"
          stroke="none"
          fill={tailwindColors.gray[700]}
        >
          <polygon points="0 5, 10 10, 10 0" />
        </marker>
      </defs>
      <line
        id="horizontal-line"
        x1="5"
        y1="2"
        x2="15"
        y2="2"
        fill="none"
        stroke={tailwindColors.gray[700]}
        strokeWidth="5"
      />
      <line
        id="vertical-line"
        x1="10"
        y1="4"
        x2="10"
        y2={dividerHeight}
        fill="none"
        stroke={tailwindColors.gray[700]}
        strokeWidth="5"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );

  const GrayDividerAnimated = () => (
    <svg
      tw="absolute"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 20 ${dividerHeight + 10}`}
      width="20"
      height={dividerHeight}
    >
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          markerWidth="2"
          markerHeight="2"
          refX="5"
          refY="5"
          orient="-90deg"
          stroke="none"
          fill={tailwindColors.gray[700]}
        >
          <polygon points="0 5, 10 10, 10 0" />
        </marker>
      </defs>
      <line
        id="horizontal-line"
        x1="5"
        y1="2"
        x2="15"
        y2="2"
        fill="none"
        stroke={tailwindColors.gray[700]}
        strokeWidth="5"
        strokeDashoffset="10"
        strokeDasharray="10"
        css={drawHorizontalLine}
      />
      <line
        id="vertical-line"
        x1="10"
        y1="4"
        x2="10"
        y2={dividerHeight}
        fill="none"
        stroke={tailwindColors.gray[700]}
        strokeWidth="5"
        markerEnd="url(#arrowhead)"
        css={[verticalLineOffScreen, moveVerticalLine]}
      />
    </svg>
  );

  return isFirstVisit ? <GrayDividerAnimated /> : <GrayDividerStatic />;
}

GrayDivider.defaultProps = {
  isFirstVisit: false,
};

GrayDivider.propTypes = {
  isFirstVisit: PropTypes.bool,
  dividerHeight: PropTypes.number.isRequired,
};
