import React from 'react';
import { Link } from 'gatsby';
import tw, { css, styled } from 'twin.macro';

const StyledLink = tw(
  Link
)`block border-b-8 border-solid border-transparent focus:border-blue-lighter focus:outline-none no-underline hover:cursor-pointer`;

const StyledSpan = styled.span`
  position: relative;
  z-index: 20;

  &::before {
    content: '';
    position: absolute;
    top: 0.9em;
    right: 0;
    height: 0.4em;
    z-index: 10;
    background-color: rgba(101, 116, 205, 0.4);
    transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1);
    width: 0;
  }

  ${StyledLink}:hover &::before {
    width: 100%;
    left: 0;
  }
`;

const StyledImage = styled.img(() => [
  tw`h-48 w-full object-cover transition duration-700 ease-in-out`,
  css`
    ${StyledLink}:hover &,
    ${StyledLink}:focus & {
      transform: scale(1.05);
    }
    
  `,
]);

const BlogCard = props => {
  const { slug, title, summary, date, timeToRead } = props;
  return (
    <StyledLink to={`blog${slug}`} aria-label={title}>
      <div tw="flex flex-col overflow-hidden">
        <div tw="flex-shrink-0 overflow-hidden">
          <StyledImage
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            alt=""
          />
        </div>
        <div tw="flex-1 bg-white p-6 flex flex-col justify-between">
          <div tw="flex-1">
            <p tw="font-body font-medium text-sm leading-5 text-indigo">Blog</p>
            <h3 tw="text-indigo-darkest font-subheading mt-2 text-xl leading-7 font-semibold">
              <StyledSpan>{title}</StyledSpan>
            </h3>
            <p tw="font-body font-light text-gray-500 mt-3 text-base leading-6">
              {summary}
            </p>
          </div>
          <div tw="mt-6 flex items-center">
            <p tw="font-body font-normal flex text-sm leading-5 text-gray-500">
              <time dateTime={date}>{date}</time>
              <span tw="mx-1">&middot;</span>
              <span>{timeToRead} min</span>
            </p>
          </div>
        </div>
      </div>
    </StyledLink>
  );
};

export default BlogCard;
