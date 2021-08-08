import { Text } from '@react-three/drei'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
const textProps = {
  fontSize: 2,
  color: 'black'
}

const TileContent = (props) => {
  const Color = new THREE.Color()
  const groupRef = useRef()
  const WordRef = useRef()
  const [hovered, setHovered] = useState(false)
  const onHover = () => {
    setHovered(true)
  }

  const UnHover = () => {
    setHovered(false)
  }

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = 'pointer'
      WordRef.current.material.color.lerp(Color.set('#FF0000'), 1)
    } else {
      document.body.style.cursor = 'auto'
      WordRef.current.material.color.lerp(Color.set('#000000'), 1)
    }
  }, [hovered])

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
