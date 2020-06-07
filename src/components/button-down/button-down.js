import React from 'react';
import PropTypes from 'prop-types';
import tw, { css } from 'twin.macro';

import { StyledLink } from './styled-link';
import chevronDownSvg from '../../images/cheveron-down.svg';

export const translate50 = css`
  transform: translate(-50%, -50%);
`;

export const ButtonDown = ({ scrollTo, hasBounceDown }) => (
  <div tw="flex justify-center">
    <StyledLink
      href={scrollTo}
      hasBounceDown={hasBounceDown}
      hasBorderRadius={'50%'}
    >
      <span tw="sr-only">Scroll down to the next section.</span>
      <img
        src={chevronDownSvg}
        alt="Chevron down"
        aria-hidden="true"
        css={[tw`h-6 w-6 absolute z-20 block top-1/2 left-1/2`, translate50]}
      />
    </StyledLink>
  </div>
);

ButtonDown.propTypes = {
  scrollTo: PropTypes.string,
  hasBounceDown: PropTypes.bool,
};
