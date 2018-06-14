import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const NavItemLi = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  justify-content: center;
  align-items: center;

  a {
    color: #8f5c2c;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
  }

  a:hover,
  a:active,
  a.active {
    color: #40a4c8;
  }

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;

    a {
      color: white;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;
    }

    a:hover,
    a:active,
    a.active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`
const navigationItem = ({ link, children }) => (
  <NavItemLi>
    <Link to={link}>{children}</Link>
  </NavItemLi>
)

export default navigationItem
