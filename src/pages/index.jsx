import React from 'react';

import { SEO } from '../components';
import { SectionOne, SectionTwo, Blog, Contact } from '../layouts/index';
import website from '../../website';

export default function IndexPage() {
  return (
    <>
      <SEO title={website.title} />
      <main>
        <SectionOne />
        <SectionTwo />
      </main>
    </>
  );
}
