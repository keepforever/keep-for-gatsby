import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 76px;
  margin-left: 15%;
  margin-right: 15%;
  @media (max-width: 500px) {
    margin-left: 0%;
    margin-right: 0%;
  }
`

const Horizontal = styled.hr`
  border: 0;
  height: 3px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
`
const styles = {
  linkStyle: {
    padding: '10px',
    textDecoration: 'none',
    color: 'black',
    border: '2px solid black',
    fontSize: 'large',
  },
}

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Container>
      <Link style={styles.linkStyle} to="/info">
        Back to Info
      </Link>
      <br />
      <br />
      <div style={{fontSize: 'x-large'}}>
        {post.frontmatter.title}
      </div>
      <Horizontal />
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
