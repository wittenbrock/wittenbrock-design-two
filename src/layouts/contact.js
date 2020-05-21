import React from 'react';
import tw from 'twin.macro';

import SocialMediaIcon from '../components/social-media-icon/index';

const Contact = () => (
  <section css={tw`w-full min-h-screen bg-purple-darker`}>
    <header css={tw`text-center text-white`}>
      <h2
        css={tw`font-display font-bold text-3xl md:text-4xl xl:text-5xl mb-4 md:mb-5 xl:mb-6`}
      >
        Drop me a line.
      </h2>
      <p
        css={tw`font-body font-normal text-lg md:text-xl xl:text-2xl mb-5 md:mb-6 xl:mb-8`}
      >
        My coding mind is always open.
      </p>
      <div css={tw`flex justify-between w-40 m-auto`}>
        <SocialMediaIcon linkedIn />
        <SocialMediaIcon gitHub />
      </div>
    </header>
  </section>
);

export default Contact;
