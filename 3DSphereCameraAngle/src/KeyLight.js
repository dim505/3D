import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { OrbitControls, Stars, Text, Html } from "@react-three/drei";
import Typography from "@material-ui/core/Typography";
import ColorPicker from "./ColorPicker";

//This is the main light that points toward the object of focus and generates strong shadows
//contains the light and text associated with that light
const KeyLight = ({ brightness, color }) => {
  return (
    <>
      <rectAreaLight
        width={3}
        height={3}
        color={color}
        intensity={brightness}
        position={[-3, 0, 5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />{" "}
      <Html position={[-3, 0, 5]} distanceFactor={10}>
        <div class="CameraText">
          <Typography display="inline" variant="h4">
            Key_Lights
          </Typography>
        </div>
      </Html>
    </>
  );
};

export default KeyLight;
