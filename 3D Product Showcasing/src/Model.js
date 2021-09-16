import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

//component for loading 3d models
const Model = (props) => {
  //loods model from files
  const gltf = useGLTF(props.location, true);
  //references mesh of model
  const mesh = React.useRef();
  //determines what to rotate depending on 3d ipod or apple
  const RotateXValue = props.DisableX ? 0.0 : 0.01;
  const RotateYValue = props.DisableX ? 0.05 : 0.01;

  //Rotates the models
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
