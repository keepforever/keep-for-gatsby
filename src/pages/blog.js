 import React from 'react';
 import Link from 'gatsby-link'

 const BlogPage = ( {data} ) => {
   //console.log('data: ', data.allMarkdownRemark.edges)
   const posts = data.allMarkdownRemark.edges

   //console.log('posts', posts[0].node.excerpt)
   return (
     <div>
       <h1>Latest Posts </h1>
       {posts.map((post, index) => {
         return (
           <div key={post.node.id}>
             <h3>{post.node.frontmatter.title}</h3>
             <small>Posted by {post.node.frontmatter.author } on {post.node.frontmatter.date}</small>
             <br/>
             <Link to={post.node.frontmatter.path}>Read More</Link>
             <br/>
             <hr/>
           </div> 
         )
       })}
     </div>
   )
 };

export const pageQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date
            title
            author
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage;
