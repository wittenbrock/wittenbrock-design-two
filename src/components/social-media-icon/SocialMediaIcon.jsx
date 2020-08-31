import React from 'react';
import PropTypes from 'prop-types';
import tw, { css } from 'twin.macro';

import LinkedinIcon from './LinkedinIcon';
import GitHubIcon from './GithubIcon';
import { pulsateBack } from '../button-down';

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

// A function that returns a social media icon wrapped in HTML
const createSocialMediaIcon = (specs, size, color) => {
  const { url, text, icon } = specs;

  return (
    <a
      href={url}
      css={[
        tw`inline-block hover:cursor-pointer no-underline text-white focus:text-blue-lighter focus:outline-none appearance-none hover:text-indigo`,
        pulsateBack,
        size === `small` ? tw`h-5 w-5` : tw`h-6 w-6`,
        css`
          color: ${color};
        `,
      ]}
    >
      <span tw="sr-only">{text}</span>
      {icon}
    </a>
  );
};

// React component - render the social media icon and its HTML
export default function SocialMediaIcon(props) {
  const { linkedIn, gitHub, size, color } = props;

  if (linkedIn) {
    return <div>{createSocialMediaIcon(linkedInSpecs, size, color)}</div>;
  }
  if (gitHub) {
    return <div>{createSocialMediaIcon(gitHubSpecs, size, color)}</div>;
  }
}

SocialMediaIcon.propTypes = {
  linkedIn: PropTypes.bool,
  gitHub: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
};

SocialMediaIcon.defaultProps = {
  color: `#fff`,
};
