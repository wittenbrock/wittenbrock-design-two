import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import { SocialMediaIcon, SEO } from '../components';
import { ContactIcon } from '../components/social-media-icon';
import website from '../../website';

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
    <>
      <SEO
        title={`${post.frontmatter.title} | ${website.titleAlt}`}
        desc={post.frontmatter.description}
        banner={post.frontmatter.thumbnail}
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
                  <h1 tw="text-white font-heading font-bold text-2xl sm:text-3xl lg:text-4xl">
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
              tw="prose prose-sm sm:prose py-10"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>
        </main>
        <div tw="flex py-16">
          <figure tw="mr-4 flex-shrink-0">
            <img
              src={data.cloudinaryMedia.secure_url}
              alt="A portrait of William Wittenbrock."
              tw="h-20 w-20 rounded-md"
              height="80"
              width="80"
            />
          </figure>
          <div>
            <h2 tw="text-gray-400 font-normal uppercase text-sm tracking-wide mb-1">
              About the author
            </h2>
            <p tw="text-white text-sm sm:text-base mb-2">
              William is a designer, web developer, and ramen aficionado.
            </p>
            <div tw="flex justify-between w-40">
              <SocialMediaIcon linkedIn size="small" color="#d2d6dc" />
              <SocialMediaIcon gitHub size="small" color="#d2d6dc" />
              <ContactIcon
                size="small"
                height="20"
                width="20"
                color="#d2d6dc"
              />
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
                  tw="text-white hover:text-indigo focus:text-blue outline-none transition ease-in-out duration-150 text-sm"
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
    </>
  );
}

export const query = graphql`
  query BlogPostContent($slug: String!) {
    cloudinaryMedia(
      public_id: { eq: "wittenbrock-design/william-wittenbrock-portrait" }
    ) {
      secure_url
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        thumbnail
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
