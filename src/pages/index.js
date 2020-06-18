import React from 'react';

import { SEO } from '../components';
import { SectionOne, SectionTwo, Blog, Contact } from '../layouts';

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
