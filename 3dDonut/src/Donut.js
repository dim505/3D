import React, { useEffect, useState, useContext, useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useSpring, animated } from "@react-spring/three";
//contains all the logic associated with the rotating donut
const Donut = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  //loads the skin for the donut
  const DonutTexture = useLoader(
    TextureLoader,
    "https://res.cloudinary.com/dydre7amr/image/upload/v1614177581/donutCool_vsn6dj.jpg"
  );
  //keeps track of user hovers over donut
  const [hovered, SetHover] = useState(false);
  //keeps track of user clicked on donut
  const [active, setActive] = useState(false);

  //does the animated scaling
  const { scale } = useSpring({
    scale: active ? [1.25, 1.25, 1.25] : [1, 1, 1]
  });
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <animated.mesh
      ref={mesh}
      onClick={() => {
        setActive(!active);
      }}
      scale={scale}
      onPointerOver={() => {
        SetHover(true);
      }}
      onPointerOut={() => {
        SetHover(false);
      }}
      {...props}
    >
      <torusGeometry args={[2, 1, 10, 80]} />
      <meshStandardMaterial
        map={DonutTexture}
        roughness={2}
        metalness={0.1}
        attach="material"
        color={hovered ? "#FFFFFF" : "#d2b48c"}
      />
    </animated.mesh>
  );
};

export default Donut;
