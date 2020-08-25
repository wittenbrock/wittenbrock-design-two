import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { SocialMediaIcon } from '../components';
import ContactIcon from '../components/social-media-icon/contact-icon';

export default function BlogPost(props) {
  const { data, pageContext } = props;
  const post = data.markdownRemark;
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

  return (
    <div tw="max-w-3xl mx-auto py-16 px-4 sm:px-6 xl:px-0">
      <main>
        <article>
          <header tw="pt-1 pb-10 border-b-4 border-gray-600 border-solid">
            <div tw="space-y-1 text-center">
              <dl tw="space-y-10 mb-3">
                <div>
                  <dt tw="sr-only">Published on</dt>
                  <dd tw="font-body text-gray-400 font-normal text-sm sm:text-base xl:text-lg">
                    <time dateTime={post.frontmatter.date}>
                      {post.frontmatter.date}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 tw="text-white font-heading font-bold text-2xl sm:text-3xl lg:text-4xl pb-4">
                  {post.frontmatter.title}
                </h1>
                <dl tw="sr-only">
                  <dt>Author</dt>
                  <dd>William Wittenbrock</dd>
                </dl>
              </div>
            </div>
          </header>
          <div
            tw="prose prose-sm sm:prose py-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </main>
      <div tw="flex py-16">
        <figure tw="mr-4">
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="A portrait of William Wittenbrock."
            tw="h-14 w-14 rounded-md"
          />
        </figure>
        <div>
          <h2 tw="text-gray-400 font-normal uppercase text-sm tracking-wide mb-1">
            About the author
          </h2>
          <p tw="text-white text-sm sm:text-base mb-2">
            William Wittenbrock is web developer and a ramen aficionado.
          </p>
          <div tw="flex justify-between w-40">
            <SocialMediaIcon linkedIn size="small" color="#d2d6dc" />
            <SocialMediaIcon gitHub size="small" color="#d2d6dc" />
            <ContactIcon size="small" height="20" width="20" color="#d2d6dc" />
          </div>
        </div>
      </div>
      <footer tw="font-body border-t-4 border-gray-600 border-solid">
        <nav aria-label="pagination">
          {prevPost && (
            <div css={[nextPost ? tw`mt-10 mb-8` : tw`my-10`]}>
              <h2 tw="text-gray-400 font-normal uppercase text-xs tracking-wide">
                Previous Article
              </h2>
              <Link
                to={prevPost.url}
                tw="text-white hover:text-indigo focus:text-blue outline-none transition ease-in-out duration-150 text-sm"
              >
                {prevPost.title}
              </Link>
            </div>
          )}
          {nextPost && (
            <div css={[prevPost ? tw`mb-10` : tw`my-10`]}>
              <h2 tw="text-gray-400 font-normal uppercase text-xs tracking-wide">
                Next Article
              </h2>
              <Link
                to={nextPost.url}
                tw="text-white hover:text-indigo focus:text-blue outline-none transition ease-in-out duration-150 text-sm"
              >
                {nextPost.title}
              </Link>
            </div>
          )}
        </nav>
        <div tw="text-base leading-5 mt-10 mb-12 sm:mb-16">
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
  );
}

export const query = graphql`
  query blogMarkdownAndProfileImage($slug: String!) {
    file(relativePath: { eq: "william-wittenbrock-portrait.jpg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD YYYY")
      }
    }
  }
`;
