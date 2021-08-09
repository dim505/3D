import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useLoader } from "@react-three/fiber";

const Dice = () => {
  const texture1 = useLoader(TextureLoader, "Texture/1.jpeg");
  const texture2 = useLoader(TextureLoader, "Texture/2.jpeg");
  const texture3 = useLoader(TextureLoader, "Texture/3.jpeg");
  const texture4 = useLoader(TextureLoader, "Texture/4.jpeg");
  const texture5 = useLoader(TextureLoader, "Texture/5.jpeg");
  const texture6 = useLoader(TextureLoader, "Texture/6.jpeg");
  return (
    <mesh rotation={[1, 1, 0]} visible position={[0, 0, 0]} castShadow>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial map={texture1} attachArray="material" />
      <meshStandardMaterial map={texture2} attachArray="material" />
      <meshStandardMaterial map={texture3} attachArray="material" />
      <meshStandardMaterial map={texture4} attachArray="material" />
      <meshStandardMaterial map={texture5} attachArray="material" />
      <meshStandardMaterial map={texture6} attachArray="material" />
    </mesh>
  );
};

/*
    <mesh visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>



*/

export default Dice;
