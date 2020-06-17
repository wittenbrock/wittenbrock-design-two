import React from 'react';
import 'twin.macro';

import BlogCard from '../components/blog-card/blog-card';

export default () => (
  <section tw="relative bg-gray pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-24 lg:px-8">
    <div tw="absolute inset-0">
      <div tw="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div tw="relative max-w-7xl mx-auto">
      <div tw="text-center">
        <h2 tw="text-3xl leading-9 tracking-tight font-extrabold text-gray-darker sm:text-4xl sm:leading-10">
          From the blog
        </h2>
        <p tw="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>

      <div tw="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <BlogCard />
      </div>
    </div>
  </section>
);
