const Floor = () => {
  return (
    <mesh receiveShadow={true} rotation={[4.6, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Floor;
