import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import tw from 'twin.macro';

import { pulsateBack } from '../components/Buttons';

export default function RssIcon(props) {
  const { size, color } = props;

  return (
    <div>
      <Link
        to="/rss.xml"
        title="Wittenbrock Design RSS feed."
        css={[
          tw`inline-block hover:cursor-pointer no-underline focus:text-blue-lighter focus:outline-none appearance-none hover:text-indigo`,
          pulsateBack,
          size === `small` ? tw`h-5 w-5` : tw`h-6 w-6`,
          color === `gray` ? tw`text-gray-300` : tw`text-white`,
        ]}
      >
        <span tw="sr-only">Wittenbrock Design RSS feed.</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zM8.07 17.5a1.57 1.57 0 1 1 1.57-1.57 1.57 1.57 0 0 1-1.57 1.57zm4.72-.79a.78.78 0 0 1-.79-.78A3.93 3.93 0 0 0 8.07 12a.79.79 0 0 1 0-1.57 5.5 5.5 0 0 1 5.5 5.5.78.78 0 0 1-.78.78zm3.92 0a.78.78 0 0 1-.78-.78 7.86 7.86 0 0 0-7.86-7.86.79.79 0 0 1 0-1.57 9.43 9.43 0 0 1 9.43 9.43.78.78 0 0 1-.79.78z" />
        </svg>
      </Link>
    </div>
  );
}

RssIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

RssIcon.defaultProps = {
  size: `large`,
  color: `white`,
};
