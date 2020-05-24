import React from 'react';
import PropTypes from 'prop-types';
import 'twin.macro';

import StyledLink from './style';
import chevronDown from '../../images/cheveron-down.svg';

const ButtonDown = ({ scrollTo, hasBounceDown }) => (
  <div tw="flex justify-center">
    <StyledLink href={scrollTo} hasBounceDown={hasBounceDown}>
      <span tw="sr-only">View the next section.</span>
      <img
        src={chevronDown}
        alt="Chevron down"
        aria-hidden="true"
        tw="h-6 w-6"
      />
    </StyledLink>
  </div>
);

ButtonDown.propTypes = {
  scrollTo: PropTypes.string,
  hasBounceDown: PropTypes.bool,
};

export default ButtonDown;
