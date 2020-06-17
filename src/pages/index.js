import React from 'react';

import SEO from '../components/seo';
import SectionOne from '../layouts/section-one';
import SectionTwo from '../layouts/section-two';
import Contact from '../layouts/contact';
import Blog from '../layouts/blog';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <main>
      <SectionOne />
      <SectionTwo />
      <Blog />
      <Contact />
    </main>
  </>
);

export default IndexPage;
