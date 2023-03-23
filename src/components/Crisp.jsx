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
  width: 90%;

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

export const Crisp = () => {
  return (
    <Section>
        <Img src='./crisp.png'/>
        <Subtitle>A web-based dashboard for management and evaluation of multi-git classrooms</Subtitle>
        <Desc>
            A brownfield project as part of B.Comp Dissertation to streamline the management and evaluation of large-scale software engineering modules involving multiple teams working across multiple GitHub repositories.
            Collaborated with a team using the MERN stack (MongoDB, Express.js, React, Node.js), supported by Docker and Jenkins.
            Pioneered cutting-edge feature of Static Code Quality Analysis, to provide various metrics for grading code quality and explored usage of advanced tools such as SonarQube on an organisational basis, as well as Code AI Language Models
        </Desc>
    </Section>
  )
}

