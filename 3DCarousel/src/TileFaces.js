import TileContent from './TileContent'
import React, { useEffect, useMemo, useRef } from 'react'
const TileFaces = (props) => {
  return (
    <group position={props.position}>
      <TileContent CamPosition={props.CamPosition} text={props.text} />
    </group>
  )
}

export default TileFaces
