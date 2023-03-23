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
  width: 110%;

  @media screen and (max-width: 768px) {
    width: 95%;
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

export const ScamQuest = () => {
    var index = 1;
    const [image, setImage] = useState('./scamquest/1.png')
    useEffect(() => {
        setInterval(() => {
            index++;
            if (index > 2) {
                index = 1;
            }
            setImage(`./scamquest/${index}.png`)
        }, 5000)
    }, [])
  return (
    <Section>
        <Img src={image}/>
        <Subtitle>Web application with AI and web-scraping functionalities to educate users on scams in a gamified environment</Subtitle>
        <Desc>
        Utilised GenAI using OpenAI API, supported by BeautifulSoup web scrapers to obtain the latest phishing trends, which are then used to generate quizzes to educate users on a React application.
        Usage of latest Prompt Engineering techniques such as In-Context Learning to improve generated questions.

        <br/> <br/>
        Written in React as frontend and Express.js with Python (BeautifulSoup) as backend.
        </Desc>
    </Section>
  )
}
