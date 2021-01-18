---
title: Drupal's frontend tools suck
date: 2020-08-22T12:00:00.000Z
description: Considering spinning up a Drupal site and using its as a frontend? I've got four reasons why you shouldn't do that.
thumbnail: ../../images/drupals-frontend-tools-suck/drupals-frontend-tools-suck-thumbnail.jpg
alt: Playing cards stacked together to make a house of cards.
---

For the past year, one of the sites I've been working on runs Drupal 8. For context, the website gets about 8,000 to 10,000 visitors a month and has just under 200 unique pages; it's a small marketing site.

When I was assigned the project, the team was just beginning to upgrade the website from Drupal 7 to Drupal 8. It's well-known in the Drupal community that upgrading to Drupal 8 is a painful experience. In fact, [a lot of sites are still on Drupal 7](https://www.jeffgeerling.com/blog/2020/did-breaking-backwards-compatibility-kill-drupal), _even though Drupal 8 was released five years ago_. When I hopped onto the project I was tasked with refactoring the site's frontend into Twig templates and modular [Paragraphs](https://www.drupal.org/project/paragraphs).

Being accustomed to JavaScript frameworks like React, I think Drupal's frontend developer experience leaves a lot to be desired. My take-away from the past year: stop using Drupal as a monolithic solution. Here are four reasons why.

##The White Screen of Death

Drupal's error handling out of the box is frustrating. Any developer who's worked with Drupal will recognize this message: _The website encountered an unexpected error. Please try again later_. It's nicknamed the 'White Screen of Death' or WSOD for short. Syntax errors like accidentally forgetting a Twig bracket or incorrectly instantiating a function will break PHP's server-side rendering and result in the WSOD.

<figure>
  <img src="https://res.cloudinary.com/wittenbrock-design/image/upload/f_auto,q_auto:best/v1599420986/wittenbrock-design/white-screen-of-death_xeqhmd.png" alt="A blank white webpage that says: The website encountered an unexpected error. Please try again later." />
  <figcaption>The dreaded White Screen of Death.</figcaption>
</figure>

Yes, Drupal does have an error report page in the admin dashboard. It can also be configured to [display PHP parsing errors on the page](https://www.drupal.org/node/158043). Even so, these error reports are lengthy, unformatted stack trace errors that can take five or six minutes to read.

Coming from React and Node.js, which immediately report the exact line they're failing at, Drupal's error handling feels prehistoric to me. A few months ago, I started diving into [Gatsby](https://www.gatsbyjs.com/), wanting to learn what all the hype was about. When Gatsby's CLI reported an error to me in a full sentence and linked two Stack Overflow discussions on how to solve the bug, my mind exploded. I could read and understand the error in seconds, not five or six minutes.

The bottom line - as developers, we spend a significant part of our time debugging. My advice is to choose tools that clearly communicates their errors, instead of relying on the developer to find them.

##Deficient documentation

Drupal has been around for a while, almost 11-years now. Since it's been out for the better part of a decade, you'd think its documentation would be comprehensive, right? Nope – its documentation is Spartan. Just look at its [Installing Drupal page](https://www.drupal.org/docs/installing-drupal). This is where most developers new to Drupal start their journey. Once you begin following it, you'll quickly find yourself confused. That's because it's riddled with information gaps and assumed knowledge (I still don't know what PHP modules Drupal officially requires). Welcome to the world of Drupal documentation.

Listen, I get it – Drupal is open-source. This is true. Open-source technologies have a lot of undeniable benefits that I won't go into here. But here's another fact: writing thorough documentation is challenging. Keeping it up to date can be a full-time job. One of the negatives of open-source projects is that they're almost always strapped for money and resources. Nowhere is this more apparent than Drupal's deficient docs.

Now, Drupal does have solid third-party documentation from sites like [Drupalize.me](https://drupalize.me/) and [DigitalOcean](https://www.digitalocean.com/community/tags/drupal), which both have excellent tutorials, courses, and documentation. So, it's not like Drupal developers are lacking lifejackets.

But, we're in 2020 now. There are multiple open-source projects with excellent native documentation. Why would you choose to use a tool that neglects to teach and inform its developers? I hope you're starting to see why you shouldn't use Drupal as a frontend. Small speed bumps become large roadblocks when you use a tool with spotty documentation and lame error handling.

##Hot module replacement (and the lack of it)

For those unfamiliar, [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) is the Webpack magic that instantly updates the browser as you modify HTML, CSS, or JavaScript during development. It's similar in function to [Live Server](https://www.npmjs.com/package/live-server). Both of these tools immediately inform you when an error occurs and automatically keep the view up to date as you edit your code, reducing frontend development time.

<figure>
  <img src="https://res.cloudinary.com/wittenbrock-design/image/upload/f_auto,q_auto:best/v1599420990/wittenbrock-design/drush-cache-clear_h576vu.png" alt="A computer terminal that lists the command drush cr thirteen times." />
  <figcaption>Clearing Drupal's cache for the one-thousandth time.</figcaption>
</figure>

Drupal doesn't have a tool that 100% replicates hot module replacement. It does have a module that utilizes hot module replacement to update the view as you edit your CSS and JavaScript edits. However, it doesn't update the view with HTML or PHP/Twig updates. To track your revisions, you're going to spend a lot of time clearing Drupal's cache and refreshing the browser. A tedious ritual that you'll soon find yourself resenting.

##Error-prone CSS aggregation

One of Drupal's out-of-the-box performance optimizations is CSS and JavaScript aggregation and caching. To decrease page load times, Drupal caches pages with static content. Essentially how it works is that the first user to visit a page gets a slower page load time. That's because, during this first visit, Drupal is constructing the page for the first time. But, on subsequent visits to this page, Drupal serves it from the cache, bypassing the need to render it again. As much as I trash Drupal frontend tooling, its [BigPipe caching system](https://www.drupal.org/docs/8/core/modules/big-pipe/overview) is pretty legit.

With that being said, it's CSS aggregation tool isn't perfect. On two occasions, this caching system has broken my site's CSS. Once [it broke my Google fonts import](https://www.drupal.org/forum/support/post-installation/2012-06-16/aggregate-and-compress-css-files-break-webfonts) and all of the website's text was displayed in Arial font. Not a disastrous bug, but an embarrassing one. The second time the site's CSS aggregation broke the navigation bar. I woke up one morning to an inbox full of emails telling me that the site was broken. That was a pretty crappy way to start the day.

CSS specificity plays a massive role in how the language works. At the end of the day, I don't like that Drupal is managing my CSS files and determining the cascade priority. I'm grateful for the quick page loads, but I also don't like the liability that comes with it.

##Conclusion

Every single tool I've used has its flaws. In fact, the more I use a technology, the more I notice its deficiencies. I believe one of the hallmarks of an experienced developer is their ability to select the right tools for the right problem. Hammers don't make great screwdrivers.

I don't think Drupal should be used as a frontend. Stop hitting a screw with a hammer. There are so many better alternatives in 2020. My advice: [decouple your Drupal instance](https://www.elevatedthird.com/article/what-headless-drupal) and pair it with a frontend framework. On the client-side, React, and Vue both have great development experiences. On the server-side, Gatsby, Next.js, and Nuxt.js are all good as well. If you are attached to a one-size-fits-all solution, check out HubSpot. Yes, it's an expensive SaaS platform, but it's a fully-featured Drupal alternative. Did I mention that all the options I listed are more performant than Drupal's server-side rendering?

It's stressful using a technology with poor documentation and lousy error handling. This stress is amplified further under tight deadlines where there's less room for errors. At the end of the day, I've found Drupal's frontend tooling to be more of a liability than an asset.
