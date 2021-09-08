//plane that acts as a floor to reflect the lights to more directly show the light direction
const Floor = () => {
  return (
    <mesh receiveShadow={true} rotation={[4.6, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Floor;
