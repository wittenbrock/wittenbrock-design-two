import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

import LinkedinIcon from './linkedin-icon';
import GitHubIcon from './github-icon';
import jelloHorizontalOnHover from './style';

const linkedInSpecs = {
  url: `https://www.linkedin.com/in/william-wittenbrock/`,
  text: `Visit William's LinkedIn profile.`,
  icon: <LinkedinIcon />,
};

const gitHubSpecs = {
  url: `https://github.com/wittenbrock`,
  text: `Visit William's Github profile.`,
  icon: <GitHubIcon />,
};
console.log('github icon', gitHubSpecs.icon);

// A function that returns a social media icon wrapped in HTML
const createSocialMediaIcon = specs => {
  const { url, text, icon } = specs;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      css={[
        tw`inline-block hover:cursor-pointer no-underline h-6 w-6 text-white focus:text-aqua focus:outline-none appearance-none`,
        jelloHorizontalOnHover,
      ]}
    >
      <span tw="sr-only">{text}</span>
      {icon}
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
