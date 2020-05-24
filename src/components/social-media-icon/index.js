import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

import linkedInSvg from '../../images/linkedIn.svg';
import gitHubSvg from '../../images/github.svg';
import jelloHorizontalOnHover from './style';

const linkedInSpecs = {
  url: `https://www.linkedin.com/in/william-wittenbrock/`,
  text: `Visit William's LinkedIn profile.`,
  image: linkedInSvg,
  imageAlt: `LinkedIn Icon`,
};

const gitHubSpecs = {
  url: `https://github.com/wittenbrock`,
  text: `Visit William's Github profile.`,
  image: gitHubSvg,
  imageAlt: `Github Icon`,
};

// A function that returns a social media icon wrapped in HTML
const createSocialMediaIcon = specs => {
  const { url, text, image, imageAlt } = specs;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      css={[
        tw`inline-block hover:cursor-pointer no-underline h-6 w-6`,
        jelloHorizontalOnHover,
      ]}
    >
      <span tw="sr-only">{text}</span>
      <img src={image} alt={imageAlt} aria-hidden="true" focusable="false" />
    </a>
  );
};

// React component - render the social media icon and its HTML
const SocialMediaIcon = ({ linkedIn, gitHub }) => {
  if (linkedIn) {
    return <div>{createSocialMediaIcon(linkedInSpecs)}</div>;
  }
  if (gitHub) {
    return <div>{createSocialMediaIcon(gitHubSpecs)}</div>;
  }
};

export default SocialMediaIcon;

SocialMediaIcon.propTypes = {
  linkedIn: PropTypes.bool,
  gitHub: PropTypes.bool,
};
