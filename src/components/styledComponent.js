import React, { Component } from 'react';
import styled from 'styled-components';

const Container  = styled.div`
  color: red;
`

class StyledComponent extends Component {

  render () {
    return (
      <Container>
        The color should be red {this.props.word}
      </Container>
    );
  }
}

export default StyledComponent
