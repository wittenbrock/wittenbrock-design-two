import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

import StyledLink from './style';

const ButtonDown = ({ scrollTo, hasBounceDown }) => (
  <div css={tw`flex justify-center`}>
    <StyledLink href={scrollTo} hasBounceDown={hasBounceDown}>
      <span css={tw`sr-only`}>View the next section.</span>
      <svg
        css={tw`h-4 w-4 text-white fill-current`}
        aria-hidden="true"
        focusable="false"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
      </svg>
    </StyledLink>
  </div>
);

ButtonDown.propTypes = {
  scrollTo: PropTypes.string,
  hasBounceDown: PropTypes.bool,
};

export default ButtonDown;
