import React, { useState } from 'react'
import styled from 'styled-components'
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ConnectNUS } from './ConnectNUS'
import { GoRestAPI } from './GoRestAPI'
import { HallInOne } from './HallInOne'
import Keyboard from './Keyboard'
import { Rcycl } from './Rcycl'

const data = [
    "hALLinOne",
    "ConnectNUS",
    "RCYCL",
    "Go REST API",
    "More"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding-top: 10vh;

  @media screen and (max-width: 768px){
    padding-top: 0;
  }
`

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media screen and (max-width: 768px){
    height: 100%;
    scroll-snap-align: none;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2%;
`

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    ::after{
        animation: moveText 0.5s linear both;

        @keyframes moveText {
            to{
                width: 100%;
            }
        }
    }
  }

  @media screen and (max-width: 768px){
    font-size: 24px;
    text-align: center;
  }
`

const Left = styled.div`
  flex: 1;
`

const MoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
`

const ModelContainer = styled.div`
  flex: 8;
`

const ButtonContainer = styled.div`
  flex: 1;
`

const Button = styled.button`
  padding-inline: 10px;
  padding-block: 5px;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  background-color: #00d0f4;
  font-family: 'Open Sans', sans-serif;
`

export const Works = () => {
    const [curr, setCurr] = useState('hALLinOne')
    return (
    <Section id='Works'>
        <Container>
            <Left>
                {curr == 'hALLinOne' ? (
                    <HallInOne/>
                ) : curr == 'ConnectNUS' ? (
                    <ConnectNUS/>
                ) : curr == 'RCYCL' ? (
                    <Rcycl/>
                ) : curr == 'Go REST API' ? (
                    <GoRestAPI/>
                ) : (
                  <MoreContainer>
                    <ModelContainer>
                      <Canvas>
                        <Stage environment="city">
                          <Keyboard/>
                        </Stage>
                        
                        <OrbitControls autoRotate/>
                      </Canvas>
                    </ModelContainer>
                    
                    <ButtonContainer>
                      <Button onClick={() => window.open('https://github.com/rjkoh', '_blank')}>View Github</Button>
                    </ButtonContainer>
                    
                  </MoreContainer>
                  
                )
                }
            </Left>

            <Right>
                <List>
                    {data.map(item => (
                        <ListItem key={item} text={item} onClick={() => setCurr(item)}>{item}</ListItem>
                    ))}
                </List>
            </Right>
        </Container>
    </Section>
  )
}
