import React from 'react';

import SEO from '../components/seo';
import SectionOne from '../layouts/section-one';
import SectionTwo from '../layouts/section-two';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <main>
      <SectionOne />
      <SectionTwo />
    </main>
  </>
);

export default IndexPage;
