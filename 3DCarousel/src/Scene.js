import TileFaces from './TileFaces'
import * as THREE from 'three'
import React, { useEffect, useState, useRef } from 'react'
import { Text } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'

//https://javascript.info/rest-parameters-spread
const Skills = ['JYTHON', 'PYTHON', 'React JS', '.Net', 'SQL', 'Azure', 'SCSS', 'SSRS', 'AWS', 'Linux', 'Crystal ', 'PowerShell']
const Scene = (props) => {
  const Globe = useRef()
  const TitleTextProp = { fontSize: 3, color: 'black', outlineColor: '#FF0000', outlineWidth: 10, outlineBlur: 10 }
  const [vertices, Setvertices] = useState([])

  useEffect(() => {
    const shape = new THREE.IcosahedronGeometry(12)
    Setvertices(shape.vertices)
  }, [])

  useFrame(() => (Globe.current.rotation.y += 0.005))

  return (
    <>
      <group position={[0, 18, 0]}>
        {' '}
        <Text {...TitleTextProp}>These are my top skills </Text>{' '}
      </group>

      <group ref={Globe}>
        {vertices.map((vertex, index) => (
          <TileFaces {...props} position={vertex} text={Skills[index]} />
        ))}
      </group>
    </>
  )
}

export default Scene
