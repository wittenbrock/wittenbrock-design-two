import React from 'react';

import SEO from '../components/seo';
import SectionOne from '../layouts/section-one';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <main>
      <SectionOne />
    </main>
  </>
);

export default IndexPage;
