// gatsby-node.js API documentation:
// https://www.gatsbyjs.com/docs/node-apis/

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// Create the property "node.fields.slug" for all MarkdownRemark nodes
// Store the file's name as a slug
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

// Log errors to the console if a GraphQL
// query fails during a build
const queryWrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

// Query all MarkdownRemark files and assign them to the variable "results".
// Then, loop over the results array and create a page for each markdown file.
// Render each of these pages using the BlogPost.jsx component.
// Pass the previous and next blog post title through props.pageContext
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await queryWrapper(
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `)
  );

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: `blog${node.fields.slug}`,
      component: path.resolve('./src/layouts/BlogPost.jsx'),
      context: {
        slug: node.fields.slug,
        prev,
        next,
      },
    });
  });
};
