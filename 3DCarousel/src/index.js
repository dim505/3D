import React, { useEffect, useMemo, useRef, useState } from 'react'
import { render } from 'react-dom'
import { useThree } from 'react-three-fiber'

import { Canvas, useFrame } from 'react-three-fiber'
import { Text, OrbitControls } from '@react-three/drei'
import Scene from './Scene'
import './styles.css'

const App = () => {
  const [CamPosition, SetCamPosition] = useState([0, 0, 0])

  function Dolly() {
    var StartTime = Date.now()
   
    useFrame(({ ...props }) => {
      if (Math.floor(Date.now() - StartTime) / 1000 > 0.05) {
        StartTime = Date.now()

        SetCamPosition([props.camera.position.x, props.camera.position.y, props.camera.position.z])
      }
    })

    return null
  }

  return (
    <Canvas camera={{ position: [0, 0, 30] }}>
      <Scene CamPosition={CamPosition} />
      <color attach="background" args={['#EFEFEF']} />

      <ambientLight intensity={1.0} />
      <OrbitControls />
      <Dolly />
    </Canvas>
  )
}
render(<App />, document.querySelector('#root'))
