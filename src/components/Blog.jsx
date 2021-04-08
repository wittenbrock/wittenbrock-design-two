import React from 'react';
import PropTypes from 'prop-types';
import 'twin.macro';

import { BlogCard } from '.';

export default function Blog(props) {
  const { posts } = props;

  return (
    <div tw="py-24 xl:py-32 px-4 sm:px-6 lg:pt-24 lg:pb-24 lg:px-8">
      <h2 tw="sr-only">Things I'm thinking about.</h2>
      <div tw="max-w-6xl mx-auto">
        <ul tw="relative grid gap-12 max-w-lg mx-auto lg:grid-cols-1 lg:max-w-none">
          {posts.map(({ node }, index) => (
            <BlogCard key={node.id} index={index} post={node} />
          ))}
        </ul>
      </div>
    </div>
  );
}

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
