import React from 'react';
import tw from 'twin.macro';

import { pulsateBack } from '../components/Buttons';

export default function LinkedinIcon(props) {
  const { size, color } = props;
  return (
    <a
      href="https://www.linkedin.com/in/william-wittenbrock/"
      title="Visit William's LinkedIn profile."
      css={[
        tw`inline-block hover:cursor-pointer no-underline focus:text-blue-lighter focus:outline-none appearance-none hover:text-indigo`,
        pulsateBack,
        size === `small` ? tw`h-5 w-5` : tw`h-6 w-6`,
        color === `gray` ? tw`text-gray-300` : tw`text-white`,
      ]}
    >
      <span tw="sr-only">Visit William's LinkedIn profile.</span>
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M8.4,18.3H5.6V9.8h2.8V18.3z M7,8.6L7,8.6
		C6.2,8.7,5.5,8.1,5.4,7.3c0-0.1,0-0.1,0-0.2c0-0.8,0.7-1.5,1.5-1.5c0,0,0.1,0,0.1,0c0.8,0,1.5,0.7,1.5,1.5S7.8,8.6,7,8.6
		C7,8.6,7,8.6,7,8.6z M18.6,18.3h-2.8v-4.6c0-1.1-0.4-1.9-1.4-1.9c-0.6,0-1.2,0.4-1.4,1c-0.1,0.2-0.1,0.5-0.1,0.7v4.8H10V9.8h2.8V11
		c0.5-0.9,1.5-1.4,2.6-1.4c1.9,0,3.3,1.2,3.3,3.8L18.6,18.3z"
        />
      </svg>
    </a>
  );
}
