import React from 'react';
import 'twin.macro';

import WittenbrockLogoAnimated from '../components/wittenbrock-design-logo/index';
import ButtonDown from '../components/button-down/index';

export default function SectionOne(){ 
  return (
  <section tw="bg-white w-full min-h-screen px-4 py-24 xl:py-32 flex flex-col justify-center items-center">
    <h1 tw="sr-only">Wittenbrock Design</h1>
    <div>
      <WittenbrockLogoAnimated />
      <ButtonDown
        to={'introduction'}
        smooth={true}
        hasbouncedown={true}
        tab={'0'}
      />
    </div>
  </section>
)};
