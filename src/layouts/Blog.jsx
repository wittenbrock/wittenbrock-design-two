import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import 'twin.macro';

import { BlogCard } from '../components';

export default function Blog() {
  const data = useStaticQuery(query);

  return (
    <section
      id="blog"
      tw="py-24 xl:py-32 px-4 sm:px-6 lg:pt-24 lg:pb-24 lg:px-8"
    >
      <div tw="max-w-7xl mx-auto">
        <header tw="text-center text-white mb-24 max-w-lg xl:max-w-2xl mx-auto">
          <h2 tw="font-heading font-bold text-3xl sm:text-4xl xl:text-5xl mb-2 sm:mb-3 xl:mb-4">
            What I'm thinking about.
          </h2>
          <p tw="font-body font-normal text-lg sm:text-xl xl:text-2xl">
            Essays, opinions, and advice on computer programming.
          </p>
        </header>
        <div tw="grid gap-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogCard
              key={node.id}
              slug={node.fields.slug}
              thumbnail={node.frontmatter.thumbnail}
              alt={node.frontmatter.alt}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
              timeToRead={node.timeToRead}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const query = graphql`
  query BlogPostPreview {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            thumbnail
            alt
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;