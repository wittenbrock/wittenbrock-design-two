import React from 'react';
import tw, { css, styled } from 'twin.macro';
import { keyframes } from '@emotion/react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { MailIcon, SendIcon, HomeIcon } from '../icons';
import tailwindColors from '../../tailwind-colors';

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

const buttonBaseStyles = [
  tw`inline-block text-white relative bg-orange rounded-full no-underline appearance-none outline-none py-2 px-16 xl:px-20 focus:outline-none hover:cursor-pointer focus:bg-blue-lighter`,
  pulsateBack,

  // Create the dark orange background that appears on hover
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

export function SubmitButton(props) {
  const { disabled } = props;
  return (
    <div tw="flex justify-center mt-3 lg:mt-0 xl:mt-6">
      <button
        type="submit"
        disabled={disabled}
        css={[
          buttonBaseStyles,
          disabled && tw`hover:cursor-not-allowed opacity-75`,
        ]}
      >
        <span tw="sr-only">Submit form</span>
        <SendIcon />
      </button>
    </div>
  );
}

export function SubscribeButton() {
  return (
    <Link to="/subscribe" css={buttonBaseStyles}>
      <MailIcon />
      <span tw="relative z-20">Subscribe</span>
    </Link>
  );
}

export function HomeButton() {
  return (
    <Link to="/" css={buttonBaseStyles}>
      <HomeIcon />
      <span tw="relative z-20">Return home</span>
    </Link>
  );
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
};
