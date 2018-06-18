import React, { Component } from 'react'
import Link from 'gatsby-link'
import { songStrings, songFunction } from './songs'

import styled from 'styled-components'

const Container = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  @media(max-width: 500px) {
    margin-left: 0%;
    margin-right: 0%;
  }
`

const Input = styled.input`
 height: 50px;
 width: 100%;
 border-bottom: '2px solid blue';
 margin: 10;
 border: 'none';
 font-size: 22;
`
const UnorderedList = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-top: 15px;
`
const ListItem = styled.li`
  display: block;
`
class SecondPage extends Component {
  state = {
    filter: '',
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    let songObjects = songFunction(songStrings)
    let filterdSongs = songObjects.filter(song => {
      return (
        song.artist.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0 ||
        song.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0
      )
    })
    //console.log('FILTERED_SONGS', filterdSongs)

    return (
      <Container>
        <h1>Songs I Sing</h1>
        <div>Search Title or Artist {"  "}: {"  "}
          <Input
            value={this.state.filter}
            onChange={evt => this.onChange('filter', evt.target.value)}
          />
        </div>
        <UnorderedList>
          {filterdSongs.map((song, index) => {
            return (
              <ListItem key={index}>
                "{song.title}" by {song.artist}
                <hr />
              </ListItem>
            )
          })}
        </UnorderedList>
      </Container>
    )
  }
}

export default SecondPage
