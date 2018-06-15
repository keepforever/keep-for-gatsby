/**
Use the Create Page API to dynamically generate individual routes
for each specifc blog post, i.e. blog/:post
 */
const path = require('path'); // standard node.js module

// Gatsby uses Redux in the backround and this is why we pass in
// boundActionCreators
exports.createPages = ({boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators
  // blog-post.js corrisponds to what we named our template file
  const postTemplate = path.resolve('src/templates/blog-post.js');
  // note, we don't name the query because it's being passed into parens
  // of a graphql() function vs. graphql` "named query" `

  // graphql() returns a Promise
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              date
              title
              author
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors)
    }
    // if no errors
    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })
}
