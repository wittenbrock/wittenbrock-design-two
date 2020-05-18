import React from 'react';
import tw from 'twin.macro';

import WittenbrockLogoAnimated from '../components/wittenbrock-design-logo/index';
import ButtonDown from '../components/button-down/index';

const SectionOne = () => (
  <section
    css={tw`w-full min-h-screen flex flex-col justify-center items-center`}
  >
    <h1 css={tw`sr-only`}>Wittenbrock Design</h1>
    <div>
      <WittenbrockLogoAnimated />
      <ButtonDown scrollTo={'#0'} hasBounceDown={true} />
    </div>
  </section>
);

export default SectionOne;
