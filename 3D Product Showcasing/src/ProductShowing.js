import "./styles.scss";

import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";

//This component contains the 3d model of the IPOD
const ProductShowing = () => {
  return (
    <>
      <h1 className="CanvasBanner">Sleek</h1>
      <h1 className="CanvasBanner2">Modern</h1>

      <Canvas camera={{ position: [0, 0, 200] }}>
        <Suspense fallback={null}>
          <Model location="/IpodModel/scene.gltf" />
        </Suspense>
        <directionalLight position={[10, 10, 5]} intensity={9} />
        <directionalLight position={[-10, -10, -5]} intensity={9} />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default ProductShowing;
