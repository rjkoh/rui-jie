import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
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
`;

const Container = styled.div`
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 90%;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2%;

`

const Title = styled.h1`
  font-size: 64px;
`

const Subtitle = styled.h2`
  color: blue;
`

const Desc = styled.p`

`

const Button = styled.button`
    height: min-content;
    width: max-content;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
`;



export const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Hello, I am Rui Jie</Title>
          <Subtitle>Aspiring Full-Stack Software Engineer</Subtitle>
          <Desc>
            I am a Singaporean Computer Science student skilled in Java, JavaScript and Python.<br/>
            Adept at working in teams and both frontend and backend programming, and pursuing a career in Software Engineering.<br/>
            My life motto is to be the best you can be, and I always strive for excellence in my work.<br/>
            Other languages/frameworks include React, React Native, GoLang, Node.js, Three.js, SQL, HTML and TailwindCSS.
          </Desc>
          <Button>Contact me</Button>
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
