import { keyframes } from '@emotion/core';
import tw, { styled, css } from 'twin.macro';

/*
 * Bounce-down was made by Brandon Gregory with some modifications by me
 * https://css-tricks.com/making-css-animations-feel-natural/
 */

const bounceDownKeyframe = keyframes`
  0% {
    transform: translateY(0);
  }

  10% {
    transform: translateY(0);
  }

  30% {
    transform: translateY(50px);
  }

  50% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
  }
`;

/* ----------------------------------------------
 * The following animations were generated by Animista
 * w: http://animista.net, t: @cssanimista
 *
 * focus-in-expand
 */

const focusInExpandKeyframe = keyframes`
  0% {
    letter-spacing: -0.5em;
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    filter: blur(0);
    opacity: 1;
  }
`;

const bounceDown = css`
  animation: ${focusInExpandKeyframe} 0.8s 3.65s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
    ${bounceDownKeyframe} 2s 4.7s ease 1;
  transform-origin: bottom;
  opacity: 0;
`;

const StyledLink = styled.a(({ hasBounceDown }) => [
  tw`inline-block bg-orange p-1 no-underline rounded-full hover:bg-orange-darker hover:scale-110 hover:cursor-pointer active:bg-orange-darker`,
  hasBounceDown && bounceDown,
]);

export default StyledLink;
