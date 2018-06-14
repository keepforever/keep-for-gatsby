import React from 'react'
import styled from 'styled-components'

import NavigationItem from './NavigationItem'

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
  },
  {
    path: '/page-2/',
    exact: true,
    name: 'About',
  },
]

const UnorderList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`

const navigationItems = props => {
  return (
    <UnorderList>
      {routes.map((route, index) => {
        return (
          <NavigationItem key={index} link={route.path}>
            {route.name}
          </NavigationItem>
        )
      })}
    </UnorderList>
  )
}

export default navigationItems

// the "active" property being passed into NavigationItem tag
// looks different because it's a boolean value
