import React from 'react'
import Link from 'gatsby-link'
import StyledComponent from '../components/styledComponent'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <StyledComponent word="fart" />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
