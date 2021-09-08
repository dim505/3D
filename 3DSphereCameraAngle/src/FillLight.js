import { OrbitControls, Stars, Text, Html } from "@react-three/drei";
import Typography from "@material-ui/core/Typography";
//This is a dimmer light oppsite of the key light used to dampen the strong shadows created by the keylight
//contains the light and text associated with that light
const FillLight = ({ brightness, color }) => {
  return (
    <>
      <rectAreaLight
        width={3}
        height={3}
        intensity={brightness}
        color={color}
        position={[2, 1, 4]}
        lookAt={[0, 0, 0]}
        penumbra={2}
        castShadow
      />

      <Html position={[2, 1, 4]} distanceFactor={10}>
        <div class="CameraText">
          <Typography display="inline" variant="h4">
            Fill_Light
          </Typography>
        </div>
      </Html>
    </>
  );
};

export default FillLight;
