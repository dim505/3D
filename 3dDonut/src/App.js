import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  Suspense
} from "react";
import "./styles.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import Donut from "./Donut";
import AppStateContext from "./Shared/appState";
import { OrbitControls, Stars } from "@react-three/drei";

const App = () => {
  const AppState = useContext(AppStateContext);

  return (
    <>
      {" "}
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} />

        <Stars radius={100} factor={4} saturation={0} fade />
        <OrbitControls />
        <Suspense fallback={null}>
          <Donut position={[-0, 0, 0]} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
