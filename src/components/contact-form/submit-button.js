import React from 'react';
import tw, { styled } from 'twin.macro';

import sendSvg from '../../images/send.svg';
import { buttonStyles, pulsateBack } from '../button-down/styles';

const StyledButton = styled.button(({ disabled }) => [
  tw`bg-orange rounded-full py-2 px-16 xl:px-20 relative`,

  disabled ? tw`hover:cursor-not-allowed opacity-75` : buttonStyles,
  pulsateBack,
]);

export default function SubmitButton(props) {
  return (
    <div tw="flex justify-center mt-3 lg:mt-0 xl:mt-6">
      <StyledButton type="submit" {...props}>
        <span tw="sr-only">Submit form</span>
        <img
          src={sendSvg}
          alt="Submit icon"
          aria-hidden="true"
          focasable="false"
          height="16"
          width="16"
          tw="h-4 w-4 relative z-20 block"
        />
      </StyledButton>
    </div>
  );
}
