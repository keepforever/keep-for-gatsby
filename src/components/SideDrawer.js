import React from 'react'
import styled from 'styled-components'
// import Logo from '../../Logo/Logo';
import NavigationItems from './NavigationItems'
import Backdrop from './Backdrop'

const ContainerOpen = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background: black;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  @media (min-width: 500px) {
    display: none;
  }
  transform: translateX(0);
`
const ContainerClosed = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background: black;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  @media (min-width: 500px) {
    display: none;
  }
  transform: translateX(-100%);
`

const sideDrawer = props => {
  // to conditionally control side drawer classes
  let display = null

  if (props.open) {
    display = (
      <ContainerOpen onClick={props.closed}>
        <div className="sidedrawer-logo">
          <div style={{ height: '72px', width: '72px' }}>Logo</div>
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </ContainerOpen>
    )
  } else {
    display = (
      <ContainerClosed onClick={props.closed}>
        <div className="sidedrawer-logo">
          <div style={{ height: '72px', width: '72px' }}>Logo</div>
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </ContainerClosed>
    )
  }
  // we use onClick in the div that contains our Nav items to close the
  // drawer whenever user clicks a link
  return (
    <div>
      <Backdrop show={false} clicked={() => console.log('backdrop clicked!')} />
      {display}
    </div>
  )
}

export default sideDrawer

//... want to conditionally assign classes hence it's a normal function body
// before we return JSX
