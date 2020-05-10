import React from 'react';
import tw from 'twin.macro';

import { WittenbrockLogoAnimated } from '../../components/wittenbrock-design-logo/index';

const Section = tw.section`w-full min-height-screen flex flex-col justify-center items-center`;

const SectionOne = () => (
  <Section>
    <h1 tw="sr-only">Wittenbrock Design</h1>
    <div>
      <WittenbrockLogoAnimated />
    </div>
  </Section>
);
