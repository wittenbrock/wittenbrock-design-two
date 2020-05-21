import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

import linkedInSvg from '../../images/linkedIn.svg';
import gitHubSvg from '../../images/github.svg';
import jelloHorizontalOnHover from './style';

const SocialMediaIcon = ({ linkedIn, gitHub }) => {
  // Function that creates either a LinkedIn or a GitHub icon based on props
  const createSocialMediaIcon = () => {
    if (linkedIn) {
      return (
        <a
          href="https://www.linkedin.com/in/william-wittenbrock/"
          target="_blank"
          rel="noopener noreferrer"
          css={[
            tw`inline-block hover:cursor-pointer no-underline h-6 w-6`,
            jelloHorizontalOnHover,
          ]}
        >
          <span css={tw`sr-only`}>Visit William's LinkedIn profile.</span>
          <img
            src={linkedInSvg}
            alt="LinkedIn icon"
            aria-hidden="true"
            focusable="false"
          />
        </a>
      );
    }

    if (gitHub) {
      return (
        <a
          href="https://github.com/wittenbrock"
          target="_blank"
          rel="noopener noreferrer"
          css={[
            tw`inline-block hover:cursor-pointer no-underline h-6 w-6`,
            jelloHorizontalOnHover,
          ]}
        >
          <span css={tw`sr-only`}>Visit William's Github profile.</span>
          <img
            src={gitHubSvg}
            alt="Github icon"
            aria-hidden="true"
            focusable="false"
          />
        </a>
      );
    }
  };

  // Render the icon UI
  return <div>{createSocialMediaIcon()}</div>;
};

export default SocialMediaIcon;

SocialMediaIcon.propTypes = {
  linkedIn: PropTypes.bool,
  gitHub: PropTypes.bool,
};
