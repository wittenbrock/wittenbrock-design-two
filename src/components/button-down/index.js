import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { Link as ScrollLink } from 'react-scroll';

import { buttonStyles, bounceDown, pulsateBack } from './styles';
import chevronDownSvg from '../../images/cheveron-down.svg';

const StyledScrollLink = styled(ScrollLink)`
  ${({ hasBounceDown }) => (hasBounceDown ? bounceDown : pulsateBack)}
`;

const ButtonDown = ({ to, smooth, hasBounceDown }) => (
  <div tw="flex justify-center">
    <StyledScrollLink
      to={to}
      smooth={smooth}
      hasBounceDown={hasBounceDown}
      css={[tw`inline-block p-1 xl:p-2 rounded-full`, buttonStyles]}
    >
      <span tw="sr-only">Scroll down to the next section.</span>
      <img
        src={chevronDownSvg}
        alt="Chevron down"
        aria-hidden="true"
        tw="h-6 w-6 relative z-20 block"
      />
    </StyledScrollLink>
  </div>
);

export default ButtonDown;

ButtonDown.propTypes = {
  scrollTo: PropTypes.string,
  hasBounceDown: PropTypes.bool,
};
