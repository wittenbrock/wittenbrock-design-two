import React from 'react';
import 'twin.macro';

import WittenbrockDesignLogo from '../components/wittenbrock-design-logo';
import ButtonDown from '../components/button-down';

export default function SectionOne() {
  return (
    <section tw="bg-white w-full min-h-screen px-4 py-24 xl:py-32 flex flex-col justify-center items-center">
      <h1 tw="sr-only">Wittenbrock Design</h1>
      <div>
        <WittenbrockDesignLogo />
        <ButtonDown
          to={`introduction`}
          smooth={true}
          hasbouncedown={true}
          tab={`0`}
        />
      </div>
    </section>
  );
}