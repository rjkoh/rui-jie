import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3%;

  @media screen and (max-width: 768px) {
    height: 70%;
    width: 95%;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const Img = styled.img`
  width: 30%;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`

const Desc = styled.p`
  text-align: justify;
  font-family: 'Open Sans', sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const HallInOne = () => {
    var index = 1;
    const [image, setImage] = useState('./hallinone/1.png')
    useEffect(() => {
        setInterval(() => {
            index++;
            if (index > 9) {
                index = 1;
            }
            setImage(`./hallinone/${index}.png`)
        }, 5000)
    }, [])
  return (
    <Section>
        <Img src={image} id='image'/>
        <Subtitle>A booking mobile application for common facilities in hall</Subtitle>
        <Desc>
        Having seen many of my peers using ineffective platforms to reserve certain facilities, I wrote this application along with a partner to facilitate bookings. Written in React Native (JavaScript) for the frontend and NodeJS for the backend, and supported with Firebase Authentication and Firestore.
        <br/> <br/>
        Engineered as part of Orbital 2022, achieving Apollo 11 (Advanced) level.
        </Desc>
    </Section>
  )
}
