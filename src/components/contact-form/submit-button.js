import React from 'react';
import tw, { styled } from 'twin.macro';

import sendSvg from '../../images/send.svg';
import { buttonStyles } from '../button-down/styled-link';

const StyledButton = styled.button(({ disabled }) => [
  tw`bg-orange rounded-full py-2 px-16 xl:px-20 relative`,

  disabled ? tw`hover:cursor-not-allowed opacity-75` : buttonStyles,
]);

const SubmitButton = props => (
  <div tw="flex justify-center mt-3 lg:mt-0 xl:mt-6">
    <StyledButton type="submit" {...props}>
      <span tw="sr-only">Submit form</span>
      <img
        src={sendSvg}
        alt="Submit icon"
        aria-hidden="true"
        focasable="false"
        tw="h-4 w-4 relative z-20 block"
      />
    </StyledButton>
  </div>
);

export default SubmitButton;