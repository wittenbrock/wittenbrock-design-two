import React from 'react';
import PropTypes from 'prop-types';
import tw, { css } from 'twin.macro';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { PageWrapper, SEO } from '../components';
import website from '../../website';
import tailwindColors from '../../tailwind-colors';
import { LinkedinIcon, GithubIcon, ContactIcon, RssIcon } from '../icons';
import { SubscribeButton } from '../components/Buttons';

// Styles that capitalize the first letter on each blog post
const dropCapFirstLetter = css`
  .dropcap {
    font-family: 'League Spartan', sans-serif;
    color: ${tailwindColors.white};
    float: left;
    font-size: 3em;
    line-height: 1;
    margin-right: 0.2em;
    padding-top: 0.4em;
  }

  .dropcap:before,
  .dropcap:after {
    content: '';
    display: block;
  }

  .dropcap:before {
    margin-top: -0.2em;
  }

  .dropcap:after {
    margin-bottom: -0.15em;
  }

  .screen-reader {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

// Create a drop cap letter that is accessible and
// looks the same on Chrome and FireFox (::first-letter doesn't look the same)
const createDropCap = string => {
  // Search the blog post's HTML string for the first word after a <p> tag
  const firstWordAndPTag = string.match(/<p>\w*/);
  // Remove the <p> tag
  const firstWord = firstWordAndPTag[0].replace('<p>', '');
  const firstLetter = firstWord.slice(0, 1);
  const firstWordFragment = firstWord.slice(1);
  const dropCapMarkup = `<span aria-hidden="true"><span class="dropcap">${firstLetter}</span>${firstWordFragment}</span>
                         <span class="screen-reader">${firstWord}</span>`;
  // Add the drop cap markup to the blog post's html, replacing the first word
  return string.replace(firstWord, dropCapMarkup);
};

export default function BlogPost(props) {
  const { pageContext } = props;
  const {
    data: { post, portrait },
  } = props;

  const prevPost = pageContext.prev
    ? {
        url: `/blog${pageContext.prev.fields.slug}`,
        title: pageContext.prev.frontmatter.title,
      }
    : null;
  const nextPost = pageContext.next
    ? {
        url: `/blog${pageContext.next.fields.slug}`,
        title: pageContext.next.frontmatter.title,
      }
    : null;

  const postHTML = createDropCap(post.html);

  return (
    <PageWrapper>
      <SEO
        title={`${post.frontmatter.title} | ${website.titleAlt}`}
        desc={post.frontmatter.description}
        banner={post.frontmatter.thumbnail.childCloudinaryAsset.fixed.src}
        pathname={`/blog${pageContext.slug}`}
        article
        date={post.frontmatter.date}
        updated={post.frontmatter.updated}
      />
      <div tw="max-w-2xl mx-auto py-16 px-4 sm:px-6 xl:px-0">
        <main>
          <article>
            <header tw="pt-1 pb-10 border-b-4 border-gray-600 border-solid">
              <div tw="space-y-1 text-center">
                <dl tw="mb-3">
                  <dt tw="sr-only">Published on</dt>
                  <dd tw="font-body text-gray-400 font-normal text-sm sm:text-base xl:text-lg">
                    <time dateTime={post.frontmatter.date}>
                      {post.frontmatter.date}
                    </time>
                  </dd>
                </dl>
                <div>
                  <h1 tw="text-white capitalize font-heading font-bold text-2xl sm:text-3xl lg:text-4xl">
                    {post.frontmatter.title}
                  </h1>
                  <dl tw="sr-only">
                    <dt>Author</dt>
                    <dd>William Wittenbrock</dd>
                  </dl>
                  {post.frontmatter.updated && (
                    <dl tw="font-body text-gray-400 font-normal text-xs mt-4">
                      <dt tw="inline">Updated on </dt>
                      <dd tw="inline">
                        <time dateTime={post.frontmatter.updated}>
                          {post.frontmatter.updated}
                        </time>
                      </dd>
                    </dl>
                  )}
                </div>
              </div>
            </header>
            <div
              id="post-content"
              css={[tw`prose prose-sm sm:prose py-10`, dropCapFirstLetter]}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: postHTML }}
            />
          </article>
        </main>
        <div tw="flex justify-center my-6">
          <SubscribeButton />
        </div>
        <div tw="flex py-16">
          <figure tw="mr-4 flex-shrink-0">
            <Image
              fixed={portrait.childCloudinaryAsset.fixed}
              alt="A portrait of William Wittenbrock."
              tw="h-20 w-20 rounded-md"
            />
          </figure>
          <div>
            <h2 tw="text-gray-400 font-normal uppercase text-sm tracking-wide mb-1">
              About the author
            </h2>
            <p tw="text-white text-sm sm:text-base mb-2">
              William is a software engineer, designer, and ramen aficionado.
            </p>
            <div tw="flex justify-between w-40">
              <LinkedinIcon size="small" color="gray" />
              <GithubIcon size="small" color="gray" />
              <ContactIcon size="small" color="gray" />
              <RssIcon size="small" color="gray" />
            </div>
          </div>
        </div>
        <footer tw="font-body border-t-4 border-gray-600 border-solid">
          <nav
            tw="border-b-4 border-gray-600 border-solid"
            aria-label="pagination"
          >
            {prevPost && (
              <div css={[nextPost ? tw`mt-10 mb-8` : tw`my-10`]}>
                <h2 tw="text-gray-400 font-normal uppercase text-xs tracking-wide">
                  Previous Post
                </h2>
                <Link
                  to={prevPost.url}
                  tw="text-white capitalize hover:text-indigo focus:text-blue outline-none transition ease-in-out duration-150 text-sm"
                >
                  {prevPost.title}
                </Link>
              </div>
            )}
            {nextPost && (
              <div css={[prevPost ? tw`mb-10` : tw`my-10`]}>
                <h2 tw="text-gray-400 font-normal uppercase text-xs tracking-wide">
                  Next Post
                </h2>
                <Link
                  to={nextPost.url}
                  tw="text-white capitalize hover:text-indigo focus:text-blue outline-none transition ease-in-out duration-150 text-sm"
                >
                  {nextPost.title}
                </Link>
              </div>
            )}
          </nav>
          <div tw="text-base leading-5 mt-16 mb-12 sm:mb-16">
            <Link
              to="/#blog"
              tw="text-sm text-white bg-transparent hover:text-indigo md:hover:text-white md:hover:bg-indigo focus:text-blue-lighter md:focus:text-white md:focus:bg-blue-lighter rounded-full sm:py-2 sm:px-5 outline-none transition ease-in-out duration-150 sm:-ml-6"
            >
              <svg
                tw="inline fill-current h-5 w-5 mb-1 -ml-2"
                viewBox="0 0 20 20"
                height="20"
                width="20"
                aria-hidden="true"
              >
                <path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" />
              </svg>
              <span>Back to the blog</span>
            </Link>
          </div>
        </footer>
      </div>
    </PageWrapper>
  );
}

// Query a specific markdown file in src/pages/posts, using the post's slug field to find the file
// This query gets the fields needed to create a  blog post page
export const query = graphql`
  query BlogPostContent($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM Do, YYYY")
        updated(formatString: "MMMM Do, YYYY")
        thumbnail {
          childCloudinaryAsset {
            fixed(transformations: "c_scale, dpr_auto, w_1000") {
              src
            }
          }
        }
      }
    }
    portrait: file(name: { eq: "william-wittenbrock-portrait" }) {
      childCloudinaryAsset {
        fixed(height: 80, width: 80, transformations: "dpr_auto") {
          ...CloudinaryAssetFixed
        }
      }
    }
  }
`;

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    next: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }),
    prev: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }),
    slug: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    portrait: PropTypes.shape({
      childCloudinaryAsset: PropTypes.shape({
        fixed: PropTypes.shape({
          base64: PropTypes.string,
          height: PropTypes.number.isRequired,
          src: PropTypes.string.isRequired,
          srcSet: PropTypes.string.isRequired,
          width: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    post: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        thumbnail: PropTypes.shape({
          childCloudinaryAsset: PropTypes.shape({
            fixed: PropTypes.shape({
              src: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
        title: PropTypes.string.isRequired,
        updated: PropTypes.string,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
