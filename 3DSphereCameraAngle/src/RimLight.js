const RimLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 5, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
};

export default RimLight;
