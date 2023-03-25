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
`

const Img = styled.img`
  width: 30%;
`;

const Subtitle = styled.h2`
  color: blue;
`

const Desc = styled.p`
    text-align: justify;
`

export const HallInOne = () => {
    var index = 1;
    const [image, setImage] = useState('../resources/hallinone/1.png')
    useEffect(() => {
        setInterval(() => {
            index++;
            if (index > 9) {
                index = 1;
            }
            setImage(`../resources/hallinone/${index}.png`)
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
