//just a plane that acts a backdrop for light to reflect off of
const Backdrop = () => {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[15, 15]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
};

export default Backdrop;
