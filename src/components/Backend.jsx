import { OrbitControls, RenderTexture, Text, PerspectiveCamera, Image } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
`

export const Backend = () => {

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
                            <color attach="background" args={["#bdbdbd"]} />
                            <Text fontSize={0.5} color="#e75902">
                                Java
                            </Text>
                        </RenderTexture>
                    </meshStandardMaterial>

                    <meshBasicMaterial attach="material-1">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#0c41ac"]} />
                            <Text fontSize={0.5} color="#deea00">
                                Python
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>

                    <meshBasicMaterial attach="material-0">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#72A75E"]} />
                            <Text fontSize={0.5} color="black">
                                Node.js
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                    
                    <meshBasicMaterial attach="material-3">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#4eb6c4"]} />
                            <Text fontSize={0.5} color="white">
                                Go
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                    
                    <meshBasicMaterial attach="material-2">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#6093C9"]} />
                            <Text fontSize={0.5} color="white">
                                C++
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                    
                    <meshBasicMaterial attach="material-5">
                        <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position={[0,0,2]} />
                            <color attach="background" args={["#2E5C8C"]} />
                            <Text fontSize={0.5} color="white">
                                SQL
                            </Text>
                        </RenderTexture>
                    </meshBasicMaterial>
                </mesh>
            </Canvas>
           
        
    </Section>
  )
}
