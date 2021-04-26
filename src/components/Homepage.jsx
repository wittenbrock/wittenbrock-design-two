import React, { useEffect, useRef, useState } from 'react';
import { keyframes } from '@emotion/react';
import tw, { css } from 'twin.macro';
import { useDebounce } from 'use-debounce';
import { Link } from 'gatsby';

import WittenbrockDesignLogo from './wittenbrock-design-logo/WittenbrockDesignLogo';
import WittenbrockDesignLogoAnimated from './wittenbrock-design-logo/WittenbrockDesignLogoAnimated';
import Blog from './Blog';
import useWindowSize from '../hooks/useWindowSize';
import GrayDivider from './GrayDivider';
import { MailIcon } from '../icons';
import { SubscribeButton } from '../components/Buttons';

// Animate the homepage's subtitle
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

// Use the Pythagorean Theorem to calculate the distance between two points.
// This will determine the gray divider's height.
// https://stackoverflow.com/questions/17628456/measure-distance-between-two-html-elements-centers/17628488#17628488
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

export default function Homepage(props) {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const { posts } = props;
  const [dividerHeight, setDividerHeight] = useState(0);
  const dividerStart = useRef(null);
  const dividerEnd = useRef(null);
  const windowSize = useWindowSize();
  const [debouncedWindowSize] = useDebounce(windowSize, 300);

  // When a user first visits the site, run the animation. But on subsquent visits, do not animate. Store the first visit in LocalStorage.
  useEffect(() => {
    // Check if user's first visit visit was stored in localStorage
    const localStorageFirstVisit = localStorage.getItem('isFirstVisit');

    // If local storage is null, then this is the user's first visit. Set state to false.
    if (localStorageFirstVisit === null) {
      setIsFirstVisit(true);
    }

    // If localStorage has the string 'false', then the user has visited the site before.
    // Set the state to false
    if (localStorageFirstVisit === 'false') {
      setIsFirstVisit(false);
    }
  }, []);

  // If this is the user's first visit, set ocal storage to the string 'false' for future reference
  useEffect(() => {
    if (isFirstVisit) {
      localStorage.setItem('isFirstVisit', 'false');
    }
  }, []);

  // When a user resizes their window, recalcuate the gray divider's height.
  // Debounce this function at 300ms to prevent too many calls and browser lag.
  useEffect(() => {
    const distance = getDistanceBetweenElements(
      dividerStart.current,
      dividerEnd.current
    );
    setDividerHeight(distance);
  }, [debouncedWindowSize.width]);

  const renderLogoAndSubtitleAndDivider = () => {
    // If its the user's first visit, animate the logo and subtitle
    if (isFirstVisit) {
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
          <div tw="flex justify-center relative mt-32">
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
        <div tw="flex justify-center relative mt-32">
          <GrayDivider dividerHeight={dividerHeight} />
          <div ref={dividerStart} aria-hidden="true"></div>
        </div>
      </>
    );
  };

  return (
    <>
      <section tw="pb-20">
        <div tw="bg-white w-full min-h-screen px-4 py-24 xl:py-32 flex flex-col justify-center items-center">
          <h1 tw="sr-only">Wittenbrock Design</h1>
          {renderLogoAndSubtitleAndDivider()}
        </div>
        <Blog posts={posts} />
        <div ref={dividerEnd} aria-hidden="true"></div>
      </section>
      <footer tw="pb-24 xl:pb-32">
        <header tw="text-center text-white mb-24 max-w-lg xl:max-w-2xl mx-auto">
          <h2 tw="font-heading font-bold text-3xl sm:text-4xl xl:text-5xl mb-2 sm:mb-3 xl:mb-4">
            Read what's next.
          </h2>
          <p tw="font-body font-normal text-lg sm:text-xl xl:text-2xl">
            Get my latest blog posts sent straight to your inbox.
          </p>
          <div tw="mt-20">
            <SubscribeButton />
          </div>
        </header>
      </footer>
    </>
  );
}
