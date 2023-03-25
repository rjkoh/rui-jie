import { OrbitControls, RenderTexture, Text, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import { DoubleSide } from 'three'

const Section = styled.div`
    height: 90%;
    width: 90%;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2%;
`

const Row = styled.div`
    display: flex;
    height: 100%;
    gap: 2%;
`

export const More = () => {
  return (
    <Section>
        <Row>
            <div>
                
            </div>
            
            <div>
                
            </div>
        </Row>
            
        <Row>
            <div>
                
            </div>
            
            <div>
                
            </div>
        </Row>
    </Section>
  )
}
