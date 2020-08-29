import React from 'react';

import { SEO } from '../components';
import { SectionOne, SectionTwo, Blog, Contact } from '../layouts';
import website from '../../website';

const IndexPage = () => (
  <>
    <SEO title={website.title} />
    <main>
      <SectionOne />
      <SectionTwo />
      <Blog />
      <Contact />
    </main>
  </>
);

export default IndexPage;
