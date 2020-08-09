import React from 'react';
import 'twin.macro';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { SocialMediaIcon } from '../components';
import ContactIcon from '../components/social-media-icon/contact-icon';

const BlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "william-wittenbrock-portrait.jpg" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div tw="max-w-3xl mx-auto py-16 px-4 sm:px-6 xl:px-0">
      <main>
        <article>
          <header tw="pt-1 pb-10 border-b border-gray-600 border-solid">
            <div tw="space-y-1 text-center">
              <dl tw="space-y-10 mb-3">
                <div>
                  <dt tw="sr-only">Published on</dt>
                  <dd tw="font-body text-gray-400 font-normal text-sm sm:text-base xl:text-lg">
                    <time datetime="2020-06-23T18:52:03Z">
                      Tuesday, June 23, 2020
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 tw="text-white font-heading font-bold text-2xl sm:text-3xl lg:text-4xl pb-4">
                  Introducing linting for Tailwind CSS IntelliSense
                </h1>
                <dl tw="sr-only">
                  <dt>Author</dt>
                  <dd>William Wittenbrock</dd>
                </dl>
              </div>
            </div>
          </header>
          <div tw="prose prose-sm sm:prose py-10">
            <h2>This is an h2 heading</h2>
            <hr />
            <h3>Test</h3>
            <h4>Test</h4>
            <p>
              this is the article. And this right here
              <a href="/">is a link</a>
            </p>

            <p>
              He knocked it out of the park, and it has been an absolute
              pleasure getting to know Simon better over the time since we first
              met.
            </p>

            <p>
              <strong>Simon is a talented developer</strong>, an amazing
              teacher, <em>and has such a</em>
              contagious enthusiasm for the sort of work we do that we knew we
              had to have him on the team if we ever had the chance.{' '}
              <code>sudo rm apache2</code>
            </p>

            <pre>
              <code>sudo apt install apache2</code>
            </pre>

            <p>
              He’s joining in a product and community focused role, and will be
              doing lots of amazing work helping us build things like Tailwind
              UI, as well as creating educational resources to help even more
              people have success with Tailwind CSS.
            </p>

            <blockquote>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
            </blockquote>

            <p>We couldn’t be more excited to be welcoming him to the team!</p>
            <ul>
              <li>Chicken</li>
              <li>Beans</li>
              <li>Rice</li>
            </ul>
            <figcaption>figure's captions - this is a neat picture</figcaption>

            <ol>
              <li>beans</li>
              <li>carrots</li>
              <li>broccoli</li>
            </ol>
          </div>
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
            William Wittenbrock is one of the most talented web developers in
            the world.
          </p>
          <div tw="flex justify-between w-40">
            <SocialMediaIcon linkedIn size="small" color="#d2d6dc" />
            <SocialMediaIcon gitHub size="small" color="#d2d6dc" />
            <ContactIcon size="small" height="20" width="20" color="#d2d6dc" />
          </div>
        </div>
      </div>
      <footer tw="font-body border-t border-gray-600 border-solid">
        <nav tw="border-b border-gray-600 border-solid" aria-label="pagination">
          <div tw="mt-10 mb-8">
            <h2 tw="text-gray-400 font-normal uppercase text-xs tracking-wide">
              Previous Article
            </h2>
            <Link
              tw="text-white hover:text-indigo focus:text-blue outline-none transition ease-in-out duration-150 text-sm"
              to="/"
            >
              Research on i18n with Gatsby and this is also a fucking huge title
            </Link>
          </div>
          <div tw="mb-10">
            <h2 tw="text-gray-400 font-normal uppercase text-xs tracking-wide">
              Next Article
            </h2>
            <Link
              tw="text-white hover:text-indigo focus:text-blue outline-none transition ease-in-out duration-150 text-sm"
              to="/"
            >
              Little Caesars Pizza Delivers with Gatsby this is a stupid long
              title that i would next consider
            </Link>
          </div>
        </nav>
        <div tw="text-base leading-5 mt-10 mb-12 sm:mb-16">
          <Link
            to="/#blog"
            tw="text-sm text-white bg-transparent hover:text-orange md:hover:text-white md:hover:bg-orange focus:text-blue-lighter md:focus:text-white md:focus:bg-blue-lighter rounded-full sm:py-2 sm:px-5 outline-none transition ease-in-out duration-150 sm:-ml-6"
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
};

export default BlogPost;
