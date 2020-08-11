import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';

import SEO from '../components/seo';
import homeSvg from '../images/home.svg';
import { buttonStyles, pulsateBack } from '../components/button-down/styles';

const NotFoundPage = () => (
  <section tw="text-white text-center w-full min-h-screen px-4 py-24 xl:py-32 flex flex-col justify-center items-center">
    <SEO title="404: Not found" />

    <h1 tw="font-heading font-bold text-3xl sm:text-4xl xl:text-5xl mb-2 sm:mb-3 xl:mb-4">
      Page Not Found
    </h1>
    <p tw="font-body font-normal text-lg sm:text-xl xl:text-2xl mb-16">
      It looks like you've clicked a broken link or entered a URL that doesn't
      exist on this site.
    </p>
    <Link
      to="/"
      css={[
        tw`bg-orange rounded-full py-2 px-8 relative`,
        buttonStyles,
        pulsateBack,
      ]}
    >
      <img
        src={homeSvg}
        alt="Home icon"
        aria-hidden="true"
        focasable="false"
        height="16"
        width="16"
        tw="h-4 w-4 relative z-20 inline-block -ml-1 mr-2 mb-1"
      />
      <span tw="relative z-20">Return home</span>
    </Link>
  </section>
);

export default NotFoundPage;
