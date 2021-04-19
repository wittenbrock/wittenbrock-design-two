import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';

import { PageWrapper, SEO } from '../components';
import { HomeIcon } from '../icons';
import { buttonStyles, pulsateBack } from '../components/forms/SubmitButton';
import website from '../../website';

export default function PageNotFound() {
  return (
    <PageWrapper>
      <section tw="text-white text-center w-full min-h-screen px-4 py-24 xl:py-32 flex flex-col justify-center items-center">
        <SEO title={`404:Page Not Found | ${website.titleAlt}`} />
        <h1 tw="font-heading font-bold text-3xl sm:text-4xl xl:text-5xl mb-2 sm:mb-3 xl:mb-4">
          Page Not Found
        </h1>
        <p tw="font-body font-normal text-lg sm:text-xl xl:text-2xl mb-16">
          It looks like you've clicked a broken link or entered a URL that
          doesn't exist on this site.
        </p>
        <Link
          to="/"
          css={[
            tw`bg-orange rounded-full py-2 px-8 relative`,
            buttonStyles,
            pulsateBack,
          ]}
        >
          <HomeIcon />
          <span tw="relative z-20">Return home</span>
        </Link>
      </section>
    </PageWrapper>
  );
}
