import TileFaces from './TileFaces'
import * as THREE from 'three'
import React, { useEffect, useState, useRef } from 'react'
import { Text } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'

//https://javascript.info/rest-parameters-spread

//contains my skills that will be used to be displayed on the carousel
const Skills = ['JYTHON', 'PYTHON', 'React JS', '.Net', 'SQL', 'Azure', 'SCSS', 'SSRS', 'AWS', 'Linux', 'Crystal ', 'PowerShell']
//contains the scene for the whole app
const Scene = (props) => {
  //references the spinning globe of skills
  const Globe = useRef()
  //describes the text properties of the skills
  const TitleTextProp = { fontSize: 3, color: 'black', outlineColor: '#FF0000', outlineWidth: 10, outlineBlur: 10 }
  //this will contain the positions needed to position the skill keywords in the 3d space
  const [vertices, Setvertices] = useState([])

  //on mount, this will get the necessary vertices from  a IcosahedronGeometry shape
  useEffect(() => {
    const shape = new THREE.IcosahedronGeometry(12)
    Setvertices(shape.vertices)
  }, [])

  //rotates the Globe on its Y axis
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
