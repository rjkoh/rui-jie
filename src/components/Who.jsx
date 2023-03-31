import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  padding-top: 10vh;

  @media screen and (max-width: 768px){
    height: 200vh;
  }
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media screen and (max-width: 768px){
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2%;

  @media screen and (max-width: 768px){
    scroll-snap-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const Title = styled.h1`
  font-size: 64px;
  color: #00d0f4;
  font-family: 'Roboto Mono', monospace;

  @media screen and (max-width: 768px){
    text-align: center;
    font-size: 56px;
  }
`

const Subtitle = styled.h2`
  color: #da4ea2;
  font-family: 'Open Sans', sans-serif;
  @media screen and (max-width: 768px){
    text-align: center;
  }
`

const Desc = styled.p`
font-family: 'Open Sans', sans-serif;
  @media screen and (max-width: 768px){
    font-size: 14px;
  }
`


const Left = styled.div`
  flex: 1;
  position: relative;

  @media screen and (max-width: 768px){
    scroll-snap-align: center;
  }
`;

const Img = styled.img`
  width: 70%;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(5%);
    }
  }
`;

export const Who = () => {
  return (
    <Section id='Who'>
        <Container>
            <Left>
                <Canvas>
                    <OrbitControls enableZoom={false} enableRotate={false}/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[3,2,1]}/>
                    <Sphere args={[1,100,200]} scale={2}>
                        <MeshDistortMaterial color="#400562" attach="material" distort={0.6} speed={2}/>
                    </Sphere>
                </Canvas>
                <Img src="../resources/profile.jpeg" style={{borderRadius: '50%', borderWidth:'thick', borderColor:'white', borderStyle:'solid'}}/>
            </Left>

            <Right>
                <Title>About me</Title>
                <Subtitle>Hello!</Subtitle>
                <Desc>
                I am Rui Jie, a current Year 2 Student at National University of Singapore, majoring in Computer Science and Business Adminstration Double Degree Program.<br/><br/>
                My interest started out from curiosity through learning how to build my own telegram bot, which blossomed into a passion for software engineering. 
                I am a driven individual with a knack for leadership, teamwork, and problem-solving. 
                Through my various modules and my own project, I have learnt numerous frontend and backend softwares, which you may find out more about here on this website.<br/><br/>
                In my free time, I enjoy running, gaming, and watching sports (Football, Basketball, and Formula 1).
                </Desc>
            </Right>
        </Container>
    </Section>
  )
}
