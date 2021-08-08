import { OrbitControls, Stars, Text, Html } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import Typography from "@material-ui/core/Typography";
import * as THREE from "three";
const SkillsCube = (props) => {
  const SkillsCubeRef = useRef();

  const GenRandomNum = () => {
    return Math.floor(Math.random() * 3) / 100;
  };
  useFrame(() => {
    SkillsCubeRef.current.rotation.y += GenRandomNum();
    SkillsCubeRef.current.rotation.x += GenRandomNum();
  });

  return (
    <group position={[0, 0, props.SkillsPosition + props.SpaceCounter]}>
      <Html position={[0, 1.4, -0.5]} distanceFactor={10}>
        <div class="SkillsTitle">
          <Typography variant="h4"> {props.texture[0]} </Typography>
        </div>
      </Html>

      <mesh ref={SkillsCubeRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial map={props.texture[1]} />
      </mesh>
    </group>
  );
};

export default SkillsCube;
