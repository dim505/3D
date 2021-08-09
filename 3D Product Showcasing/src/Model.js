import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

const Model = (props) => {
  const gltf = useGLTF(props.location, true);
  const mesh = React.useRef();
  const RotateXValue = props.DisableX ? 0.0 : 0.01;
  const RotateYValue = props.DisableX ? 0.05 : 0.01;
  useFrame(() => {
    mesh.current.rotation.x += RotateXValue;
    mesh.current.rotation.y += RotateYValue;
  });
  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default Model;
