import { OrbitControls, RenderTexture, Text, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
`

export const Databases = () => {

  return (
    <Section>
        
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} rotation/>
                <ambientLight intensity={1}/>
                <mesh>
                    <boxGeometry attach="geometry" args={[2.5, 2.5, 2.5]}/> 
                    <meshStandardMaterial attach="material-0">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#fd8300"]} />
                            <Text fontSize={0.3} color="blue" position={[0,0.15,0]}>
                                Firebase
                            </Text>
                            <Text fontSize={0.3} color="blue" position={[0,-0.15,0]}>
                                MongoDB
                            </Text>
                        </RenderTexture>
                    </meshStandardMaterial>

                    <meshBasicMaterial attach="material-4">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#306792"]} />
                            <Text fontSize={0.2} color="white" position={[0,0.15,0]}>
                                PostgreSQL
                            </Text>
                            <Text fontSize={0.2} color="white" position={[0,-0.15,0]}>
                                MySQL
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>

                    <meshBasicMaterial attach="material-1">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["white"]} />
                            <Text fontSize={0.5} color="black">
                                Git
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                    
                    <meshBasicMaterial attach="material-3">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#9D2146"]} />
                            <Text fontSize={0.2} color="#F5C501" position={[0,0.3,0]}>
                                AI
                            </Text>
                            <Text fontSize={0.2} color="#F5C501" position={[0,0,0]}>
                                ML
                            </Text>
                            <Text fontSize={0.2} color="#F5C501" position={[0,-0.3,0]}>
                                NLP
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                    
                    <meshBasicMaterial attach="material-2">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#e2d700"]} />
                            <Text fontSize={0.3} color="black">
                                JUnit
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                    
                    <meshBasicMaterial attach="material-5">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#2E5C8C"]} />
                            <Text fontSize={0.3} color="white">
                                RESTful APIs
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                </mesh>
            </Canvas>
           
        
    </Section>
  )
}
