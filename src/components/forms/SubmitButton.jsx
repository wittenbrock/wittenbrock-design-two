import React from 'react';
import tw, { css, styled } from 'twin.macro';
import { keyframes } from '@emotion/react';
import PropTypes from 'prop-types';

import { SendIcon } from '../../icons';
import tailwindColors from '../../../tailwind-colors';

const pulsateBackKeyframe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
`;

export const pulsateBack = css`
  &:active,
  &:focus {
    animation: ${pulsateBackKeyframe} 0.3s ease-in-out both;
  }
`;

export const buttonStyles = [
  tw`relative bg-orange no-underline appearance-none focus:outline-none hover:cursor-pointer focus:bg-blue-lighter`,

  css`
    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      border-radius: 9999px;
      opacity: 0;
      transform: scale(0.2);
      background-color: ${tailwindColors.orange.darker};
      height: 100%;
      width: 100%;
      transition: all 0.25s ease-out;
    }

    &:hover::after {
      transform: scale(1);
      opacity: 1;
    }

    &:active::after {
      background-color: ${tailwindColors.blue.lighter};
    }
  `,
];

const StyledButton = styled.button(({ disabled }) => [
  tw`bg-orange rounded-full py-2 px-16 xl:px-20 relative`,

  disabled ? tw`hover:cursor-not-allowed opacity-75` : buttonStyles,
  pulsateBack,
]);

export default function SubmitButton(props) {
  return (
    <div tw="flex justify-center mt-3 lg:mt-0 xl:mt-6">
      <StyledButton type="submit" {...props}>
        <span tw="sr-only">Submit form</span>
        <SendIcon />
      </StyledButton>
    </div>
  );
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
};
