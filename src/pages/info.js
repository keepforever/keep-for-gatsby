import React, {Component} from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import Brian from '../assets/Brian_Avatar.png'

const Container = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 76px;
  @media (max-width: 500px) {
    margin-left: 0%;
    margin-right: 0%;
  }
`
const Input = styled.input`
 height: 50px;
 width: 100%;
 border-bottom: '2px solid blue';
 margin: 10;
 border: 'none';
 font-size: 22;
`

const Avatar = styled.img`
  border-radius: 120px;
  height: auto;
  width: auto;
  max-width: 250px;
  max-height: 250px;
`

class InfoPage extends Component {
  state = {
    passcode: ""
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  render() {

    const {data} = this.props
    const posts = data.allMarkdownRemark.edges
    let contactInfo = null;
    if(this.state.passcode === "purpledog") {
      contactInfo = (
        <div>
          <p style={{margin: 0}}>
            email: <strong>heckler246@yahoo.com</strong>
          </p>
          <p>
            Please put <strong>"KeepForever"</strong> in the email subject
          </p>
        </div>

      )
    }
    //console.log('posts', posts[0].node.excerpt)
    return (
      <Container>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Avatar src={Brian} alt="something is wrong" />
        </div>
        <Input
          placeholder="Enter code for contact"
          value={this.state.passcode}
          onChange={evt => this.onChange('passcode', evt.target.value)}
        />
        <div style={{margin: '10px'}}>
          {contactInfo}
        </div>
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
