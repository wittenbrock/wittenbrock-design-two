import React from 'react';
import { SEO } from '../components';
import { BlogPost } from '../layouts';

const BlogPostPage= () => (
  <>
    <SEO title="Home" />
    <main>
      <BlogPost />
    </main>
  </>
);

export default BlogPostPage;