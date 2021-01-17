import React from 'react';
import { graphql } from 'gatsby';

import { SEO } from '../components';
import { SectionOne, SectionTwo, Blog, Contact } from '../templates/index';
import website from '../../website';

export default function IndexPage(props) {
  const { blogPosts } = props.data;

  return (
    <>
      <SEO title={website.title} />
      <main>
        <SectionOne />
        <SectionTwo />
        <Blog posts={blogPosts.edges} />
        <Contact />
      </main>
    </>
  );
}

// Query all of the markdown files in src/posts
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
                fluid(transformations: "dpr-auto") {
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
