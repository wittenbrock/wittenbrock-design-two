import React from 'react';
import tw from 'twin.macro';

import { pulsateBack } from '../components/Buttons';

export default function GithubIcon(props) {
  const { size, color } = props;
  return (
    <a
      href="https://github.com/wittenbrock"
      title="Visit William's Github profile."
      css={[
        tw`inline-block hover:cursor-pointer no-underline focus:text-blue-lighter focus:outline-none appearance-none hover:text-indigo`,
        pulsateBack,
        size === `small` ? tw`h-5 w-5` : tw`h-6 w-6`,
        color === `gray` ? tw`text-gray-300` : tw`text-white`,
      ]}
    >
      <span tw="sr-only">Visit William's Github profile.</span>
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12,0.3c-6.6,0-12,5.4-12,12c0,5.3,3.4,9.8,8.2,11.4C8.8,23.8,9,23.4,9,23.1l0-2c-3.3,0.7-4-1.6-4-1.6
      c-0.5-1.4-1.3-1.8-1.3-1.8C2.6,17,3.7,17,3.7,17c1.2,0.1,1.8,1.2,1.8,1.2c1.1,1.8,2.8,1.3,3.5,1c0.1-0.8,0.4-1.3,0.8-1.6
      c-2.7-0.3-5.5-1.3-5.5-5.9c0-1.3,0.5-2.4,1.2-3.2C5.5,8.1,5,6.9,5.7,5.3c0,0,1-0.3,3.3,1.2c1-0.3,2-0.4,3-0.4c1,0,2,0.1,3,0.4
      c2.3-1.6,3.3-1.2,3.3-1.2c0.7,1.7,0.2,2.9,0.1,3.2c0.8,0.8,1.2,1.9,1.2,3.2c0,4.6-2.8,5.6-5.5,5.9c0.4,0.4,0.8,1.1,0.8,2.2l0,3.3
      c0,0.3,0.2,0.7,0.8,0.6c4.9-1.6,8.2-6.2,8.2-11.4C24,5.7,18.6,0.3,12,0.3z"
        />
      </svg>
    </a>
  );
}
