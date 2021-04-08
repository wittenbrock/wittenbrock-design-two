import React, { useEffect, useRef, useState } from 'react';
import { keyframes } from '@emotion/react';
import tw, { css } from 'twin.macro';
import { writeStorage, useLocalStorage } from '@rehooks/local-storage';
import { useDebounce } from 'use-debounce';

import WittenbrockDesignLogo from './wittenbrock-design-logo/WittenbrockDesignLogo';
import WittenbrockDesignLogoAnimated from './wittenbrock-design-logo/WittenbrockDesignLogoAnimated';
import Blog from '../components/Blog';
import useWindowSize from '../hooks/useWindowSize';
import GrayDivider from '../components/GrayDivider';

const TextFocusInKeyframe = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

const textFocusIn = css`
  animation: ${TextFocusInKeyframe} 1s 3.65s
    cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
`;

function getPositionAtCenter(element) {
  const { top, left, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

function getDistanceBetweenElements(a, b) {
  const aPosition = getPositionAtCenter(a);
  const bPosition = getPositionAtCenter(b);

  return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
}

export default function SectionOne(props) {
  const [numberOfVisits] = useLocalStorage('numberOfVisits');
  const { posts } = props;
  const [dividerHeight, setDividerHeight] = useState(0);
  const dividerStart = useRef(null);
  const dividerEnd = useRef(null);
  const windowSize = useWindowSize();
  const [debouncedWindowSize] = useDebounce(windowSize, 300);

  // When a user first visits the site, run the animation. But on subsquent visits, do not animate. Save their first visit in LocalStorage.
  useEffect(() => {
    if (numberOfVisits === undefined) {
      writeStorage('numberOfVisits', 1);
    }

    if (numberOfVisits >= 1) {
      const addOneVisit = numberOfVisits + 1;
      writeStorage('numberOfVisits', addOneVisit);
    }
  }, []);

  useEffect(() => {
    const distance = getDistanceBetweenElements(
      dividerStart.current,
      dividerEnd.current
    );
    setDividerHeight(distance);
  }, [debouncedWindowSize.width]);

  const renderLogoAndSubtitleAndDivider = () => {
    // If its the user's first visit, animate the logo and subtitle
    if (numberOfVisits === 1) {
      return (
        <>
          <WittenbrockDesignLogoAnimated isFirstVisit />
          <p
            css={[
              textFocusIn,
              tw`text-indigo-darkest font-body font-normal text-center text-base md:text-xl mt-24`,
            ]}
          >
            Essays, opinions, and advice on computer programming.
          </p>
          <div tw="relative mt-32">
            <GrayDivider dividerHeight={dividerHeight} isFirstVisit />
            <div ref={dividerStart} aria-hidden="true"></div>
          </div>
        </>
      );
    }

    // If its a subsequent visit, do not animate
    return (
      <>
        <WittenbrockDesignLogo />
        <p tw="text-indigo-darkest font-body font-normal text-center text-base md:text-xl mt-24">
          Essays, opinions, and advice on computer programming.
        </p>
        <div tw="relative mt-32">
          <GrayDivider dividerHeight={dividerHeight} />
          <div ref={dividerStart} aria-hidden="true"></div>
        </div>
      </>
    );
  };

  return (
    <section>
      <div tw="bg-white w-full min-h-screen px-4 py-24 xl:py-32 flex flex-col justify-center items-center">
        <h1 tw="sr-only">Wittenbrock Design</h1>
        {renderLogoAndSubtitleAndDivider()}
      </div>
      <Blog posts={posts} />
      <div ref={dividerEnd} aria-hidden="true"></div>
    </section>
  );
}
