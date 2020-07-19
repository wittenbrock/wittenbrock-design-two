import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "william-wittenbrock-portrait.jpg" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <>
      <div tw="antialiased">
        <div tw="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <header tw="py-10">
            <div tw="text-base leading-5">
              <Link
                to="/#blog"
                css={[
                  tw`text-sm sm:text-base text-white bg-transparent hover:text-indigo md:hover:text-white md:hover:bg-indigo focus:text-blue-lighter md:focus:text-white md:focus:bg-blue-lighter rounded-full sm:py-2 sm:px-5 outline-none transition ease-in-out duration-150 sm:-ml-6`,
                ]}
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
          </header>
        </div>
      </div>
      <div tw="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <main>
          <article>
            <header tw="pt-6 pb-10 border-b border-gray-darker border-solid">
              <div tw="space-y-1 text-center">
                <dl tw="space-y-10 mb-3">
                  <div>
                    <dt tw="sr-only">Published on</dt>
                    <dd tw="font-body text-gray font-normal text-sm sm:text-base xl:text-lg">
                      <time datetime="2020-06-23T18:52:03Z">
                        Tuesday, June 23, 2020
                      </time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <h1 tw="font-display font-bold text-3xl sm:text-4xl pb-4">
                    Introducing linting for Tailwind CSS IntelliSense
                  </h1>
                </div>
                <div>
                  <dl>
                    <dt tw="sr-only">Authors</dt>
                    <dd>
                      <ul tw="flex justify-center">
                        <li tw="flex items-center">
                          <Img
                            fixed={data.file.childImageSharp.fixed}
                            alt="A portrait of William Wittenbrock."
                            tw="rounded-full mt-1"
                          />
                        </li>
                        <li tw="ml-3 mt-1">
                          <dl tw="text-sm font-medium leading-5 whitespace-no-wrap">
                            <dt tw="sr-only">Name</dt>
                            <dd tw="text-gray text-left">
                              William
                              <br />
                              Wittenbrock
                            </dd>
                          </dl>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
            </header>
            <div tw="pt-10 pb-8">
              <p>this is the article.</p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default BlogPost;
