import React from 'react'
// import Logo from '../../Logo/Logo'
import NavigationItems from './NavigationItems'
import DrawerToggle from './DrawerToggle'
import styled from 'styled-components'


const Header = styled.header`
  color: white;
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #2b1d0e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  nav {
    height: 100%;
  }
`
const Nav = styled.nav`
  @media (max-width: 499px) {
    display: none;
  }
`

const toolbar = props => (
  <Header >
    {/* <div className="toolbar-logo">
      <Logo />
    </div> */}
    <Nav className="toolbar-desktoponly">
      <NavigationItems />
    </Nav>
    <DrawerToggle clicked={() => console.log("toggle clicked")}/>
  </Header>
)

export default toolbar
