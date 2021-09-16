import React, { useEffect, useState, useContext, useRef } from "react";
import { useFrame } from "react-three-fiber";
//This is the second shape that I bring the user through later toward the end of the scroll bar
const Torus = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  //rotates the shape on its X and Y
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
