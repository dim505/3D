import React, { Component, Suspense } from "react";
import "./styles.scss";
import { Canvas } from "react-three-fiber";
import Dice from "./Dice";
import KeyLight from "./KeyLight";
import Floor from "./Floor";
import Backdrop from "./Backdrop";
import FillLight from "./FillLight";
import RimLight from "./RimLight";
import * as THREE from "three";
import { OrbitControls, Stars } from "@react-three/drei";
//root component that stores the child components
export default function App() {
  return (
    <>
      <Canvas camera={{ position: [1, 1, 8] }}>
        <KeyLight brightness={40} color="#ff0505" />
        <FillLight brightness={13} color="#3737f6" />
        <RimLight brightness={30} color="#fff" />
        <Suspense fallback={null}>
          <Dice />
        </Suspense>
        <OrbitControls />
        <Floor />
        <Backdrop />
      </Canvas>
    </>
  );
}
