import React from 'react';
import 'twin.macro';

export default () => (
  <div tw="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div tw="flex-shrink-0">
      <img
        tw="h-48 w-full object-cover"
        src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
        alt=""
      />
    </div>
    <div tw="flex-1 bg-white p-6 flex flex-col justify-between">
      <div tw="flex-1">
        <p tw="text-sm leading-5 font-medium text-indigo">
          <a href="#" tw="hover:underline">
            Blog
          </a>
        </p>
        <a href="#" tw="block">
          <h3 tw="mt-2 text-xl leading-7 font-semibold text-gray">
            Boost your conversion rate
          </h3>
          <p tw="mt-3 text-base leading-6 text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            accusantium praesentium eius, ut atque fuga culpa, similique sequi
            cum eos quis dolorum.
          </p>
        </a>
      </div>
      <div tw="mt-6 flex items-center">
        <div tw="flex-shrink-0">
          <a href="#">
            <img
              tw="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>
        <div tw="ml-3">
          <p tw="text-sm leading-5 font-medium text-gray">
            <a href="#" tw="hover:underline">
              Roel Aufderhar
            </a>
          </p>
          <div tw="flex text-sm leading-5 text-gray">
            <time datetime="2020-03-16">Mar 16, 2020</time>
            <span tw="mx-1">&middot;</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
