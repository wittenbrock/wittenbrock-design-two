import React from 'react';
import 'twin.macro';

import WittenbrockLogoAnimated from '../components/wittenbrock-design-logo/index';
import { ButtonDown } from '../components/button-down/button-down';

const SectionOne = () => (
  <section tw="w-full min-h-screen py-24 xl:py-32 flex flex-col justify-center items-center">
    <h1 tw="sr-only">Wittenbrock Design</h1>
    <div>
      <WittenbrockLogoAnimated />
      <ButtonDown scrollTo={'#introduction'} hasBounceDown />
    </div>
  </section>
);

export default SectionOne;
