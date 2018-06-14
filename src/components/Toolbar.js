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
  background-color: black;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

`
const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: flex-end;
  @media (max-width: 499px) {
    display: none;
  }
`

const Toolbar = props => (
  <Header >
    {/* <div className="toolbar-logo">
      <Logo />
    </div> */}
    <Nav >
      <NavigationItems />
    </Nav>
    <DrawerToggle clicked={props.clicked}/>
  </Header>
)

export default Toolbar
