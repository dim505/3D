import TileContent from './TileContent'
import React, { useEffect, useMemo, useRef } from 'react'

//positions the skill in 3D space
const TileFaces = (props) => {
  return (
    <group position={props.position}>
      <TileContent CamPosition={props.CamPosition} text={props.text} />
    </group>
  )
}

export default TileFaces
