const tailwindColors = require('./tailwind-colors');

module.exports = {
  pathPrefix: `/`, // Prefix for all links.
  title: `Software Engineer & Designer | Wittenbrock Design`, // Site Title
  titleAlt: `Wittenbrock Design`, // Title for JSONLD
  description: `Essays, opinions, and advice on computer programming. Check out my latest posts.`,
  headline: `Essays, opinions, and advice on computer programming.`, // Headline for schema.org JSONLD
  url: `https://www.wittenbrockdesign.com`, // Domain of your site. No trailing slash!
  siteLanguage: `en`, // Language Tag on <html> element
  banner: `https://res.cloudinary.com/wittenbrock-design/image/upload/f_auto,q_auto:best/v1599512014/wittenbrock-design/what-im-thinking-about.png`, // Used for SEO
  ogLanguage: `en_US`, // Facebook Language

  // JSONLD / Manifest
  favicon: `src/icons/favicon.png`, // Used for manifest favicon generation
  shortName: `W-Design`, // shortname for manifest. MUST be shorter than 12 characters
  author: `William Wittenbrock`, // Author for schemaORGJSONLD
  themeColor: tailwindColors.indigo.darkest,
  backgroundColor: tailwindColors.indigo.darkest,
};
