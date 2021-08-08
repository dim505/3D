import React, { useEffect, useState, useContext, useRef } from "react";
import { useFrame } from "react-three-fiber";

const Torus = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.03;
    mesh.current.rotation.x += 0.03;
  });

  return (
    <mesh position={[0, 0, 40]} ref={mesh}>
      <torusGeometry attach="geometry" args={[5, 3, 16, 20]} />
      <meshStandardMaterial
        color="#FFFFFF"
        wireframe={true}
        attach="material"
      />
    </mesh>
  );
};

export default Torus;
