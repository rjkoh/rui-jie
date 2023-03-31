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

export const GoRestAPI = () => {
    var index = 1;
    const [image, setImage] = useState('/gorestapi/1.png')
    useEffect(() => {
        setInterval(() => {
            index++;
            if (index > 4) {
                index = 1;
            }
            setImage(`/gorestapi/${index}.png`)
        }, 5000)
    }, [])
  return (
    <Section>
        <Img src={image}/>
        <Subtitle>A Local Backend API that responds to HTTP requests for various data</Subtitle>
        <Desc>
        This API allows a user to add and update a database and tables with data in JSON body.
        The user can also query intersections between tables using parameters in the request URL.
        The API uses Regexs to extract data from strings within JSON Body and sends HTTP responses with SQL rows as JSON, and HTTP Status Bad Request with error message on errors in JSON
        <br/> <br/>
        Written in GoLang, with MySQL as database.
        </Desc>
    </Section>
  )
}
