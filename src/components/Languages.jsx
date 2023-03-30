import React, { useState } from 'react'
import styled from 'styled-components'
import {Backend} from './Backend'
import { Databases } from './Databases'
import { Frontend } from './Frontend'

const data = [
    "Backend",
    "Frontend",
    "Others"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding-top: 10vh;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media screen and (max-width: 768px){
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

const Left = styled.div`
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
    font-size: 56px;
  }
`

const Right = styled.div`
  flex: 1;
`

export const Languages = () => {
    const [type, setType] = useState("Backend")
  return (
    <Section id='Languages'>
        <Container>
            <Left>
                <List>
                    {data.map(item => (
                        <ListItem key={item} text={item} onClick={() => setType(item)}>{item}</ListItem>
                    ))}
                </List>
            </Left>

            <Right>
                {type == "Backend" ? (
                    <Backend/>
                ) : type == "Frontend" ? (
                    <Frontend/>
                ) : (
                    <Databases/>
                )
                }
            </Right>
        </Container>
    </Section>
  )
}
