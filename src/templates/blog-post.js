import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 76px;
  margin-left: 15%;
  margin-right: 15%;
  @media(max-width: 500px) {
    margin-left: 0%;
    margin-right: 0%;
  }
`
const styles = {
  linkStyle: {
    padding: '10px',
    textDecoration: 'none',
    color: 'black',
    border: '2px solid black',
    fontSize: 'large'
  }
}

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Container>
      <Link style={styles.linkStyle} to="/blog">Back to Info</Link>
      <br/>
      <br/>
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
