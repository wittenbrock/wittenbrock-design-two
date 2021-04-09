import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import tw from 'twin.macro';

import { pulsateBack } from '../components/contact-form/SubmitButton';

export default function ContactIcon(props) {
  const { size, height, width, color } = props;

  return (
    <div>
      <Link
        to="/contact"
        title="Send William a message."
        css={[
          tw`inline-block hover:cursor-pointer no-underline focus:text-blue-lighter focus:outline-none appearance-none hover:text-indigo`,
          pulsateBack,
          size === `small` ? tw`h-5 w-5` : tw`h-6 w-6`,
          color === `gray` ? tw`text-gray-300` : tw`text-white`,
        ]}
      >
        <span tw="sr-only">Send William a message.</span>
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 0A12.04 12.04 0 0 0 0 12a12.04 12.04 0 0 0 12 12 12.04 12.04 0 0 0 12-12A12.04 12.04 0 0 0 12 0zM5.5 9.3L8.8 12l-3.3 2.5V9.3zm13 6.8c0 .7-.6 1.3-1.3 1.3H6.8c-.7 0-1.3-.6-1.3-1.3v-.3l4.1-3.2 2.4 1.9 2.4-1.9 4.1 3.2v.3zm0-1.6L15.2 12l3.3-2.7v5.2zm0-6.5L12 13.2 5.5 8v-.1c0-.7.6-1.3 1.3-1.3h10.4c.7 0 1.3.6 1.3 1.4h0z" />
          <path
            fill="transparent"
            d="M12 14.5l-2.4-1.9-4.1 3.2v.3c0 .7.6 1.3 1.3 1.3h10.4c.7 0 1.3-.6 1.3-1.3v-.3l-4.1-3.2-2.4 1.9zM5.5 9.3v5.2l3.3-2.6zm11.7-2.7H6.8c-.7 0-1.3.6-1.3 1.3V8l6.5 5.2L18.5 8v-.1c0-.7-.6-1.3-1.3-1.3zm1.3 7.9V9.3l-3.3 2.6z"
          />
        </svg>
      </Link>
    </div>
  );
}

ContactIcon.propTypes = {
  size: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
};

ContactIcon.defaultProps = {
  height: `24`,
  width: `24`,
  color: `white`,
};
