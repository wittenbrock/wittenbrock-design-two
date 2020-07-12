import React from 'react';
import 'twin.macro';

import BlogCard from '../components/blog-card';

const Blog = () => (
  <section id="blog" tw="py-24 xl:py-32 px-4 sm:px-6 lg:pt-24 lg:pb-24 lg:px-8">
    <div tw="max-w-7xl mx-auto">
      <header tw="text-center text-white mb-24 max-w-lg xl:max-w-2xl mx-auto">
        <h2 tw="font-display font-bold text-3xl sm:text-4xl xl:text-5xl mb-2 sm:mb-3 xl:mb-4">
          From the blog
        </h2>
        <p tw="font-body font-normal text-lg sm:text-xl xl:text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </header>

      <div tw="grid gap-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  </section>
);

export default Blog;
