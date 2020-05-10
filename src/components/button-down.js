import React from 'react';
import PropTypes from 'prop-types';

const DownButton = ({ scrollTo }) => (
  <div>
    <a
      href={scrollTo}
      tw="inline-block bg-orange p-4 no-underline rounded-full hover:scale-110 hover:bg-orange-darker hover:scale-110 hover:cursor-pointer active:bg-orange-darker"
    >
      <span tw="sr-only">View the next section.</span>
    </a>
    <svg
      tw="h-2 w-2 text-white fill-current"
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
    </svg>
  </div>
);

DownButton.propTypes = {
  scrollTo: PropTypes.string,
};

export default DownButton;
