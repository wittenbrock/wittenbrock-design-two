module.exports = {
  '*.{js,jsx}': ['npm run lint:fix'],
  '*.{json|yml|yaml|css|less|scss|md|graphql|mdx}': ['prettier --write'],
}