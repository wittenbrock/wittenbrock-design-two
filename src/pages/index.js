import React from 'react';

import { SEO } from '../components';
import { SectionOne, SectionTwo, Blog, Contact } from '../layouts';
import website from '../../website';

export default function IndexPage() {
  return (
  <>
    <SEO title={website.title} />
    <main>
      <SectionOne />
      <SectionTwo />
      <Blog />
      <Contact />
    </main>
  </>
)};
