import React from 'react';
import PropTypes from 'prop-types';
import 'twin.macro';

import { StyledLink } from './styled-link';
import chevronDownSvg from '../../images/cheveron-down.svg';

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
        tw="h-6 w-6 relative z-20 block"
      />
    </StyledLink>
  </div>
);

ButtonDown.propTypes = {
  scrollTo: PropTypes.string,
  hasBounceDown: PropTypes.bool,
};
