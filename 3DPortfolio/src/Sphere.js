import React, { useEffect, useState, useContext, useRef } from "react";
import { useFrame } from "react-three-fiber";

const Sphere = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry attach="geometry" args={[3.5, 32, 32]} />
      <meshStandardMaterial
        color="#FFFFFF"
        wireframe={true}
        attach="material"
      />
    </mesh>
  );
};

export default Sphere;
