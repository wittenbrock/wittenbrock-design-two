import React, { useState, useEffect } from 'react';
import 'twin.macro';

import WittenbrockDesignLogo from './wittenbrock-design-logo/WittenbrockDesignLogo';
import { ButtonDown } from '../components';

export default function SectionOne() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  // When a user first visits the site, run the animation. But on subsquent visits, do not animate.
  useEffect(() => {
    const localStorageFirstVisit = localStorage.getItem('isFirstVisit'); // 'false'

    if (localStorageFirstVisit === null) {
      setIsFirstVisit(true);
    }

    if (localStorageFirstVisit === 'false') {
      setIsFirstVisit(false);
    }
  }, []);

  useEffect(() => {
    if (isFirstVisit) {
      localStorage.setItem('isFirstVisit', 'false');
    }
  }, []);

  // If this is a user's first visit, animate the button.
  const animateButton = () => {
    if (isFirstVisit) {
      return <ButtonDown to={`introduction`} smooth hasbouncedown tab={`0`} />;
    }
    return <ButtonDown to={`introduction`} smooth tab={`0`} />;
  };

  return (
    <section tw="bg-white w-full min-h-screen px-4 py-24 xl:py-32 flex flex-col justify-center items-center">
      <h1 tw="sr-only">Wittenbrock Design</h1>
      <div>
        <WittenbrockDesignLogo isFirstVisit={isFirstVisit} />
        {animateButton()}
      </div>
    </section>
  );
}
