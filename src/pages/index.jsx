import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { PageWrapper, SEO, Homepage } from '../components';
import website from '../../website';

export default function IndexPage(props) {
  const {
    data: {
      blogPosts: { edges },
    },
  } = props;

  return (
    <PageWrapper>
      <SEO title={website.title} />
      <main>
        <Homepage posts={edges} />
      </main>
    </PageWrapper>
  );
}

// Query all of the markdown files in src/pages/posts
// Sort the markdown files by date, with the most recently written at the 0 index
// This query gets the fields needed to create a blog post preview cards
export const data = graphql`
  query BlogPostPreview {
    blogPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            description
            alt
            title
            thumbnail {
              childCloudinaryAsset {
                fluid(transformations: "dpr_auto") {
                  ...CloudinaryAssetFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    blogPosts: PropTypes.shape({
      edges: PropTypes.arrayOf(
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
    }).isRequired,
  }).isRequired,
};
