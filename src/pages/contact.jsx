import React from 'react';

import { PageWrapper, SEO, Homepage, Contact } from '../components';
import website from '../../website';

export default function ContactPage() {
  return (
    <PageWrapper>
      <SEO title={`Contact | ${website.titleAlt}`} pathname="contact" />
      <main>
        <Contact />
      </main>
    </PageWrapper>
  );
}
