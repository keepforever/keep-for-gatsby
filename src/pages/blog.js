import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Container = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 76px;
  @media (max-width: 500px) {
    margin-left: 0%;
    margin-right: 0%;
  }
`

const InfoPage = ({ data }) => {
  //console.log('data: ', data.allMarkdownRemark.edges)
  const posts = data.allMarkdownRemark.edges

  //console.log('posts', posts[0].node.excerpt)
  return (
    <Container>
      {posts.map((post, index) => {
        return (
          <div key={post.node.id}>
            <h3 style={{marginBottom: '10px'}}>{post.node.frontmatter.title}</h3>
            <small>
              From
              <strong>  {post.node.frontmatter.author}  </strong>
              on <strong>
                {post.node.frontmatter.date}
              </strong>
            </small>
            <br />
            <Link style={{color: 'red'}} to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <hr />
          </div>
        )
      })}
    </Container>
  )
}

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

export default InfoPage
