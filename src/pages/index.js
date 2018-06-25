import React from 'react'
import Link from 'gatsby-link'
import kfBanner from '../assets/kfBanner.jpg'
import styled from 'styled-components'

//import StyledComponent from '../components/styledComponent'

const soundCloudAcoustic =
  'https://soundcloud.com/keep-forever/sets/noahs-studio-san-francisco'
const readyToGoYoutube = 'https://youtu.be/cRl0iPXaTSI'
const pleaseDontKeepMeWaitingYoutube = 'https://youtu.be/7s7NzQTg9NM'
const fullBandCovers =
  'https://soundcloud.com/keep-forever/sets/live-performances'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  margin-right: 15%;
  margin-left: 15%;
  @media (max-width: 500px) {
    margin-left: 5%;
    margin-right: 5%;
  }
  @media (max-width: 400px) {
    margin-left: 0%;
    margin-right: 0%;
  }
`
const H2 = styled.h2`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
`
const Anchor = styled.a`
  text-decoration: none;
  justify-content: center;
  color: black;
  margin-top: 10px;
  display: flex;
  padding: 10px;
  width: 100%;
  border: 2px solid black;
  border-radius: 10px;
  font-size: large;
  align-items: center;
  cursor: pointer;
  :hover {
    color: red;
  }
`
const BannerImage = styled.img`
  border-radius: 100px;
  height: 90%;
  width: 90%;
`
const IndexPage = () => (
  <Container>
    <BannerImage src={kfBanner} alt="something is wrong" />
    <H2>Original Records: </H2>
    <Anchor target="_blank" href={readyToGoYoutube}>
      Ready to Go
    </Anchor>
    <Anchor target="_blank" href={pleaseDontKeepMeWaitingYoutube}>
      Please Don't Keep Me Waiting
    </Anchor>
    <hr />
    <H2>Live Demos: </H2>
    <Anchor target="_blank" href={soundCloudAcoustic}>
      Acoustic Covers
    </Anchor>
    <Anchor target="_blank" href={fullBandCovers}>
      Full Band Covers
    </Anchor>
  </Container>
)

export default IndexPage
