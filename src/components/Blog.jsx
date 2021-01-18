import React from 'react';
import tw, { css } from 'twin.macro';

import { BlogCard } from '.';
import tailwindColors from '../../tailwind-colors';

const grayDividerStyles = css`
  @media screen and (min-width: 1024px) {
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 100%;
      background: ${tailwindColors.gray[600]};
      position: absolute;
      top: 0;
      left: 50%;
      right: inherit;
      margin-left: -0.031rem;
    }
  }
`;

export default function Blog(props) {
  const { posts } = props;

  return (
    <section
      id="blog"
      tw="py-24 xl:py-32 px-4 sm:px-6 lg:pt-24 lg:pb-24 lg:px-8"
    >
      <div tw="max-w-6xl mx-auto">
        <header tw="text-center text-white mb-24 max-w-lg xl:max-w-2xl mx-auto">
          <h2 tw="font-heading font-bold text-3xl sm:text-4xl xl:text-5xl mb-2 sm:mb-3 xl:mb-4">
            What I'm thinking about.
          </h2>
          <p tw="font-body font-normal text-lg sm:text-xl xl:text-2xl">
            Essays, opinions, and advice on computer programming.
          </p>
        </header>
        <div
          css={[
            tw`relative grid gap-12 max-w-lg mx-auto lg:grid-cols-1 lg:max-w-none`,
            grayDividerStyles,
          ]}
        >
          {posts.map(({ node }, index) => (
            <BlogCard key={node.id} index={index} post={node} />
          ))}
        </div>
      </div>
    </section>
  );
}
