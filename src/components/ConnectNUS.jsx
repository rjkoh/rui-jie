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
`

const Img = styled.img`
  width: 80%;
`;

const Subtitle = styled.h2`
  color: blue;
`

const Desc = styled.p`
    text-align: justify;
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

