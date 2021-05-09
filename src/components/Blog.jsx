import React from 'react';
import PropTypes from 'prop-types';
import 'twin.macro';

import BlogCard from './BlogCard';

export default function Blog(props) {
  const { posts } = props;

  return (
    <div id="blog" tw="py-24 xl:py-32 px-4 sm:px-6 lg:pt-24 lg:pb-24 lg:px-8">
      <h2 tw="sr-only">Things I&apos;m thinking about.</h2>
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
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }).isRequired,
        frontmatter: PropTypes.shape({
          alt: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          thumbnail: PropTypes.shape({
            childCloudinaryAsset: PropTypes.shape({
              fluid: PropTypes.shape({
                aspectRatio: PropTypes.number.isRequired,
                base64: PropTypes.string,
                sizes: PropTypes.string.isRequired,
                src: PropTypes.string.isRequired,
                srcSet: PropTypes.string.isRequired,
              }).isRequired,
            }).isRequired,
          }).isRequired,
          title: PropTypes.string.isRequired,
        }).isRequired,
        id: PropTypes.string.isRequired,
        timeToRead: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};
