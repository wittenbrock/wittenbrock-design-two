import React from 'react';
import tw from 'twin.macro';

import { ButtonDown } from '../components/button-down/button-down';

const SectionTwo = () => (
  <section
    id="introduction"
    css={tw`w-full min-h-screen bg-purple-darker flex flex-col justify-center items-center`}
  >
    <header css={tw`text-center text-white mb-32 md:mb-40 xl:mb-48`}>
      <h2
        css={tw`font-display font-bold text-3xl md:text-4xl xl:text-5xl mb-4 md:mb-8 xl:mb-12`}
      >
        <span>I design and code </span>
        <span css={tw`block sm:inline`}>beautiful websites.</span>
      </h2>
      <p
        css={tw`font-body font-semibold text-lg md:text-xl xl:text-2xl mb-4 md:mb-8 xl:mb-12`}
      >
        I am William Wittenbrock.
      </p>
      <p css={tw`font-body text-lg lg:text-xl`}>I love what I do.</p>
    </header>
    <ButtonDown scrollTo={'#1'} />
  </section>
);

export default SectionTwo;
