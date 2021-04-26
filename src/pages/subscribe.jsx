import React from 'react';
import tw, { styled, css } from 'twin.macro';

import SubscribeForm from '../components/forms/SubscribeForm';
import { PageWrapper, SEO } from '../components';
import { LinkedinIcon, GithubIcon, RssIcon } from '../icons';
import website from '../../website';

const StyledDiv = styled.div(() => [
  tw`lg:flex flex-wrap w-full`,

  css`
    max-width: 90rem;
    margin: auto;
  `,
]);

const StyledHeader = styled.header(() => [
  tw`text-center text-white mb-24 lg:mb-0 flex flex-col justify-center items-center`,

  css`
    flex-basis: 50%;
    max-width: 90rem;
  `,
]);

export default function Contact() {
  return (
    <PageWrapper>
      <SEO title={`Subscribe | ${website.titleAlt}`} pathname="subscribe" />
      <main>
        <section tw="flex justify-center items-center w-full min-h-screen max-w-6xl mx-auto px-4 pt-24 xl:pt-32 sm:pb-24 xl:pb-32">
          <StyledDiv>
            <StyledHeader>
              <h1 tw="font-heading font-bold text-3xl sm:text-4xl xl:text-5xl mb-2 sm:mb-3 xl:mb-4">
                Stay in the loop.
              </h1>
              <p tw="font-body font-normal text-lg sm:text-xl xl:text-2xl mb-8 sm:mb-10 xl:mb-12">
                Sign up to get my latest blog posts, and the occasional
                newsletter.
              </p>
              <div tw="flex justify-between w-40">
                <LinkedinIcon />
                <GithubIcon />
                <RssIcon />
              </div>
            </StyledHeader>
            <SubscribeForm />
          </StyledDiv>
        </section>
      </main>
    </PageWrapper>
  );
}
