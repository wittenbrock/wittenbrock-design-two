import React from 'react';
import 'twin.macro';

import ButtonDown from '../components/button-down/button-down';

const SectionTwo = () => (
  <section
    id="introduction"
    tw="w-full min-h-screen py-24 xl:py-32 bg-indigo-darkest flex flex-col justify-center items-center"
  >
    <header tw="text-center text-white mb-32 md:mb-40 xl:mb-48">
      <h2
        tw="font-display font-bold text-3xl md:text-4xl xl:text-5xl mb-4 md:mb-8 xl:mb-12"
      >
        <span>I design and code </span>
        <span tw="block sm:inline">beautiful websites.</span>
      </h2>
      <p
        tw="font-body font-semibold text-lg md:text-xl xl:text-2xl mb-4 md:mb-8 xl:mb-12"
      >
        I am William Wittenbrock.
      </p>
      <p tw="font-body text-lg lg:text-xl">I love what I do.</p>
    </header>
    <ButtonDown scrollTo={'#contact'} />
  </section>
);

export default SectionTwo;
