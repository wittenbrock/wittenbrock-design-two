import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import tw, { css, styled } from 'twin.macro';
import Image from 'gatsby-image';

const defaultLinkStyles = `block bg-white border-b-8 border-solid border-transparent focus:border-blue-lighter active:border-transparent focus:outline-none no-underline hover:cursor-pointer max-w-md mx-auto lg:mx-0 min-w-full sm:min-w-112`;

const isOdd = integer => Boolean(integer % 2);

// This function assigns different styles based on the blog card's index value
// to create the "ladder" effect
const generateLinkStyles = number => {
  if (number === 0) {
    return tw`${defaultLinkStyles}`;
  } else if (isOdd(number)) {
    return tw`${defaultLinkStyles} lg:ml-auto lg:-mt-48`;
  } else {
    return tw`${defaultLinkStyles} lg:-mt-12`;
  }
};

const StyledLink = styled(Link)`
  ${props => generateLinkStyles(props.index)}
`;

const StyledSpan = styled.span(() => [
  tw`text-xl capitalize font-semibold bg-gradient-to-r from-indigo-transparent to-indigo-transparent duration-150 ease-linear transition-background-size bg-left-bottom bg-no-repeat bg-0/7`,
  css`
    ${StyledLink}:hover &,
    ${StyledLink}:focus & {
      background-size: 100% 7px;
    }
  `,
]);

const imageStyles = [
  tw`h-48 w-full object-cover transition duration-700 ease-in-out`,
  css`
    ${StyledLink}:hover &,
    ${StyledLink}:focus & {
      transform: scale(1.05);
    }
  `,
];

export default function BlogCard(props) {
  const { post, index } = props;
  const slug = post.fields.slug;
  const timeToRead = post.timeToRead;
  const thumbnail = post.frontmatter.thumbnail.childCloudinaryAsset.fluid;
  const { alt, title, date, description } = post.frontmatter;

  return (
    <li>
      <StyledLink to={`blog${slug}`} aria-label={title} index={index}>
        <div tw="flex flex-col overflow-hidden h-full">
          <div tw="flex-shrink-0 overflow-hidden">
            <Image css={imageStyles} fluid={thumbnail} alt={alt} />
          </div>
          <div tw="flex-1 bg-white p-6 flex flex-col justify-between">
            <div tw="flex-1">
              <h3 tw="text-indigo-darkest font-subheading mt-2 text-xl leading-7 font-semibold">
                <StyledSpan>{title}</StyledSpan>
              </h3>
              <p tw="sr-only">{description}</p>
            </div>
            <div tw="mt-6 flex items-center">
              <p tw="font-body font-normal flex text-sm leading-5 text-gray-500">
                <time dateTime={date}>{date}</time>
                <span tw="mx-1">&middot;</span>
                <span>{timeToRead} minute read</span>
              </p>
            </div>
          </div>
        </div>
      </StyledLink>
    </li>
  );
}

BlogCard.propTypes = {
  index: PropTypes.number.isRequired,
  post: PropTypes.shape({
    timeToRead: PropTypes.number.isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnail: PropTypes.object.isRequired,
    }),
  }).isRequired,
};
