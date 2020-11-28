import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import tw, { css } from 'twin.macro';

import { BlogCard } from '../components';

const grayDividerStyles = css`
  @media screen and (min-width: 1024px) {
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 100%;
      background: #4b5563;
      position: absolute;
      top: 0;
      left: 50%;
      right: inherit;
      margin-left: -0.031rem;
    }
  }
`;
6xl mx-auto">
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
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <BlogCard
              index={index}
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
