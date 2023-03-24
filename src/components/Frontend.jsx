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

export const Frontend = () => {

  return (
    <Section>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} rotation/>
                <ambientLight intensity={1}/>
                <mesh>
                    <boxGeometry attach="geometry" args={[2.5, 2.5, 2.5]}/>
                    <meshStandardMaterial attach="material-4">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#00D2F4"]} />
                            <Text fontSize={0.5} color="white">
                                React
                            </Text>
                        </RenderTexture>
                    </meshStandardMaterial>

                    <meshBasicMaterial attach="material-1">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#DA4924"]} />
                            <Text fontSize={0.5} color="white">
                                HTML
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>

                    <meshBasicMaterial attach="material-0">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#151B2B"]} />
                            <Text fontSize={0.25} color="#17B6C1">
                                CSS (Tailwind)
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                    
                    <meshBasicMaterial attach="material-3">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["white"]} />
                            <Text fontSize={0.5} color="black">
                                Three.js
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                    
                    <meshBasicMaterial attach="material-5">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#DD6A00"]} />
                            <Text fontSize={0.5} color="#4F7C97">
                                JavaFX
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                    
                    <meshBasicMaterial attach="material-2">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#9B54F3"]} />
                            <Text fontSize={0.5} color="#05C77C">
                                Figma
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                </mesh>
            </Canvas>
    </Section>
  )
}
