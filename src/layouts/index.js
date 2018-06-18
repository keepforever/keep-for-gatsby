import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'
import Toolbar from '../components/Toolbar'
import SideDrawer from '../components/SideDrawer'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  margin-top: 56px;
`
class Layout extends Component {
  state = {
    showDrawer: false,
  }
  drawerToggleHandler = () => {
    // console.log("drawerToggleHandler clicked!")
    this.setState(prevState => {
      return {
        showDrawer: !prevState.showDrawer,
      }
    })
  }
  render() {
    const { children, data } = this.props
    const { showDrawer} = this.state
    // console.log("showDrawer", showDrawer)
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Toolbar
          open={showDrawer}
          clicked={this.drawerToggleHandler}
        />
        <SideDrawer
          clicked={this.drawerToggleHandler}
          open={showDrawer}
        />
        <Container>{children()}</Container>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
