import { OrbitControls, Stars, Text, Html } from "@react-three/drei";
import Typography from "@material-ui/core/Typography";
//This is the main light that points toward the object of focus and generates strong shadows
//A light behind the object of focus to help the subject pop out of the background
const RimLight = ({ brightness, color }) => {
  return (
    <>
      <rectAreaLight
        width={2}
        height={2}
        intensity={brightness}
        color={color}
        position={[1, 5, -2]}
        rotation={[0, 180, 0]}
        castShadow
      />
      <Html position={[1, 5, -2]} distanceFactor={10}>
        <div class="CameraText">
          <Typography display="inline" variant="h4">
            Rim_Light
          </Typography>
        </div>
      </Html>
    </>
  );
};

export default RimLight;
