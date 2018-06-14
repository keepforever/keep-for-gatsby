import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';

const Container  = styled.div`
  color: red;
`
// keyframes returns a unique name based on a hash of the contents of the keyframes
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

class StyledComponent extends Component {

  render () {
    return (
      <Container>
        The color should be red {this.props.word}
        <Rotate>
          &lt; 💅 &gt;
        </Rotate>
      </Container>
    );
  }
}

export default StyledComponent
