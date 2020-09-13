import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

import { buttonStyles, bounceDown, pulsateBack } from './styles';
import chevronDownSvg from '../../images/cheveron-down.svg';

export default function ButtonDown(props) {
  const { to, hasbouncedown } = props;
  return (
    <div tw="flex justify-center">
      <a
        href={to}
        css={[
          tw`inline-block p-1 xl:p-2 rounded-full`,
          buttonStyles,
          hasbouncedown ? bounceDown : pulsateBack,
        ]}
      >
        <span tw="sr-only">Scroll down to the next section.</span>
        <img
          src={chevronDownSvg}
          alt="Chevron down"
          aria-hidden="true"
          height="24"
          width="24"
          tw="h-6 w-6 relative z-20 block"
        />
      </a>
    </div>
  );
}

ButtonDown.propTypes = {
  to: PropTypes.string.isRequired,
  smooth: PropTypes.bool,
  hasbouncedown: PropTypes.bool,
};
