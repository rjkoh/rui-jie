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
  width: 25%;
`;

const Subtitle = styled.h2`
  color: blue;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`

const Desc = styled.p`
    text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const Rcycl = () => {
    var index = 1;
    const [image, setImage] = useState('../resources/rcycl/1.png')
    useEffect(() => {
        setInterval(() => {
            index++;
            if (index > 4) {
                index = 1;
            }
            setImage(`../resources/rcycl/${index}.png`)
        }, 5000)
    }, [])
  return (
    <Section>
        <Img src={image}/>
        <Subtitle>A mobile application that awards Green CrypoTokens for recycling</Subtitle>
        <Desc>
        This application was written as an exploration into blockchain and to support to environment. 
        RCYCL is linked to cryptocurrency wallets lke metamask, to award tokens to users for recycling. 
        RCYCL uses Google Maps API to obtain a user's location and find the nearest recycling bins, and has a QR code scanner to scan QR codes on recycling bins after recycling. 
        Using location services and camera permissions, RCYCL ensures that the user is near the bin before awarding the token. 
        Written as part of NUS Hacker's HackNRoll 2023 in 24 hours.
        <br/> <br/>
        Written in React Native, supported by NodeJS, Firebase, Git and Ether.
        </Desc>
    </Section>
  )
}