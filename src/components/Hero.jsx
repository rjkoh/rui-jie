import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { FaGithub, FaLinkedin, FaEnvelopeOpenText } from 'react-icons/fa'
import React from 'react'
import styled from 'styled-components'
import Mac from './Mac'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 10vh;
  

  @media screen and (max-width: 768px){
    height: 200vh;
    padding-top: 0;
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 90%;

  @media screen and (max-width: 768px){
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2%;

  @media screen and (max-width: 768px){
    flex: 1;
  }
`

const Title = styled.h1`
  font-size: 50px;
  color: #00d0f4;
  font-family: 'Roboto Mono', monospace;

  @media screen and (max-width: 768px){
    font-size: 36px;
    text-align: center;
  }
`

const Subtitle = styled.h2`
  color: #da4ea2;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 768px){
    font-size: 22px;
    text-align: center;
  }
`

const Desc = styled.p`
  font-family: 'Open Sans', sans-serif;
  @media screen and (max-width: 768px){
    font-size: 14px;
  }
`

const Links = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`

const Icon = styled.a`
  cursor: pointer;
  scroll-behavior: smooth;
  color: white;
  :hover{
    scale: 1.1;
    color: #0066fe
  }
`

const Right = styled.div`
  flex: 3;

  @media screen and (max-width: 768px){
    flex: 1;
    scroll-snap-align: center;
  }
`;



export const Hero = () => {
  return (
    <Section id='Home'>
      <Container>
        <Left>
          <Title>Hello, I am Rui Jie</Title>
          <Subtitle>Aspiring Full-Stack Software Engineer</Subtitle>
          <Desc>
            I am a Singaporean Computer Science student skilled in Java, JavaScript and Python.<br/><br/>
            Adept at working in teams and both frontend and backend programming, and pursuing a career in Software Engineering.<br/><br/>
            My life motto is to be the best you can be, and I always strive for excellence in my work.<br/><br/>
            Other languages/frameworks include React, React Native, GoLang, Node.js, Three.js, SQL, HTML and TailwindCSS.
          </Desc>
          <Links>
            <Icon href="https://github.com/rjkoh" target='_blank'>
              <FaGithub size={40}/>
            </Icon>
            
            <Icon href="https://www.linkedin.com/in/kohruijie/" target='_blank'>
              <FaLinkedin size={40}/>
            </Icon>
            
            <Icon href="#Contact">
              <FaEnvelopeOpenText size={40}/>
            </Icon>
            
          </Links>
        </Left>
        <Right>
          <Canvas>
            <Stage environment="city">
              <Mac/>
            </Stage>
            
            <OrbitControls enableZoom={false} autoRotate/>
          </Canvas>
        </Right>
      </Container>
    </Section>
  )
}
