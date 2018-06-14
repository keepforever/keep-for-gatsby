import React from 'react';

const backdrop = ( props ) => (
    props.show ? <div style={styles.main} onClick={props.clicked}></div> : null

);

export default backdrop;

const styles = {
  main: {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "100",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0 ,0 ,0 , 0.5)",
  }
}
