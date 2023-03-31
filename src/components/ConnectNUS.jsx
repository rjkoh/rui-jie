import React from 'react'
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
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
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

export const ConnectNUS = () => {
  return (
    <Section>
        <Img src='../resources/ConnectNUS.png'/>
        <Subtitle>A desktop application for Module Planning</Subtitle>
        <Desc>
            A brownfield project engineered to tackle the lack of collaborative platforms during the Module Bidding exercise in NUS, in a team of 5 as part of a software engineering module. 
            Led the team in full-stack programming, testing and documentation (User and Developer Guide), as well as implementing CI.
            <br/> <br/>
            Written in Java as backend and JavaFX as frontend. Supported by Git, CSS, CodeCov, Gradle, Jekyll, GitHub Actions, and GitHub pages, as well as UML modelling with PlantUML.
        </Desc>
    </Section>
  )
}

