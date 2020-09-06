import React from 'react';
import tw, { styled, css } from 'twin.macro';

import { SocialMediaIcon, ContactForm } from '../components';

const StyledDiv = styled.div(() => [
  tw`lg:flex flex-wrap`,

  css`
    max-width: 90rem;
    margin: auto;
  `,
]);

const StyledHeader = styled.header(() => [
  tw`text-center text-white mb-24 lg:mb-0 flex flex-col justify-center items-center`,

  css`
    flex-basis: 50%;
    max-width: 90rem;
  `,
]);

export default function Contact() {
  return (
    <section id="contact" tw="w-full px-4 pt-24 xl:pt-32 sm:pb-24 xl:pb-32">
      <StyledDiv>
        <StyledHeader>
          <h2 tw="font-heading font-bold text-3xl sm:text-4xl xl:text-5xl mb-2 sm:mb-3 xl:mb-4">
            Drop me a line.
          </h2>
          <p tw="font-body font-normal text-lg sm:text-xl xl:text-2xl mb-8 sm:mb-10 xl:mb-12">
            I'm always happy to help.
          </p>
          <div tw="flex justify-between w-40">
            <SocialMediaIcon linkedIn />
            <SocialMediaIcon gitHub />
          </div>
        </StyledHeader>
        <ContactForm />
      </StyledDiv>
    </section>
  );
}