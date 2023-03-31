/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 mac.gltf --transform
Author: lazercar (https://sketchfab.com/lazercar)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/apple-imac-ba474409e8044e01b3cf43de0c43c121
Title: Apple iMac
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./mac-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[1.98, -2.28, 2.22]} rotation={[0.01, 0.22, -1.61]} scale={[2.86, 0.16, 1.82]}>
          <mesh geometry={nodes.Cube_0.geometry} material={materials.Material} />
          <mesh geometry={nodes.Cube_1.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Cube_2.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cube_3.geometry} material={materials['Material.003']} />
        </group>
        <group position={[0.32, -2.38, 0.05]} rotation={[1.57, -0.04, -1.6]} scale={[0.06, 0.06, 1.52]}>
          <mesh geometry={nodes.Cylinder_0.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Material} />
        </group>
        <group position={[0.29, -5.33, 0.06]} rotation={[0, 0, -1.61]} scale={[0.19, 0.37, 0.53]}>
          <mesh geometry={nodes.Plane_0.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.003']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./mac-transformed.glb')
