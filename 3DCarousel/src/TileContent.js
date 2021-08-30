import { Text } from '@react-three/drei'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

//some text properties for the skills text
const textProps = {
  fontSize: 2,
  color: 'black'
}

//contains the text and what ever logic associated with it
const TileContent = (props) => {
  const Color = new THREE.Color()
  //references the group for word positioning to always point toward the camera
  const groupRef = useRef()
  //references the word for color change
  const WordRef = useRef()
  //keeps track if mouse hovers over word
  const [hovered, setHovered] = useState(false)
  const onHover = () => {
    setHovered(true)
  }

  const UnHover = () => {
    setHovered(false)
  }

  //takes care of color change of text on mouse over
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = 'pointer'
      WordRef.current.material.color.lerp(Color.set('#FF0000'), 1)
    } else {
      document.body.style.cursor = 'auto'
      WordRef.current.material.color.lerp(Color.set('#000000'), 1)
    }
  }, [hovered])

  //updates the position of skills text to always look at the camera regardless of position
  useEffect(() => {
    groupRef.current.lookAt(props.CamPosition[0], props.CamPosition[1], props.CamPosition[2])
  }, [props.CamPosition])

  return (
    <group ref={groupRef}>
      <Text onPointerOver={onHover} onPointerOut={UnHover} ref={WordRef} depthTest={false} material-toneMapped={false} {...textProps}>
        {props.text}
      </Text>
    </group>
  )
}

export default TileContent
