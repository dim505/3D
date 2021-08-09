import "./styles.scss";
import Grid from "@material-ui/core/Grid";
import PublicIcon from "@material-ui/icons/Public";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";
import TextGlitch from "react-text-glitch";
import ParticlesBg from "particles-bg";

export default function App() {
  return (
    <>
      <Grid
        justify="center"
        alignItems="center"
        classes={{ root: "GridParent" }}
        container
      >
        <Grid item xs={2}>
          <h1 className="Banner">Shinny</h1>
        </Grid>
        <Grid xs={4}>
          <Typography display="inline" variant="h1" gutterBottom>
            <TextGlitch>iPod </TextGlitch>

            <div className="AppleLogo">
              <Canvas camera={{ position: [0, 0, 1000] }}>
                <Suspense fallback={null}>
                  <Model DisableX={true} location="/AppleLogo/scene.gltf" />
                </Suspense>

                <directionalLight position={[10, 10, 5]} intensity={4} />
                <directionalLight position={[-10, -10, -5]} intensity={4} />
              </Canvas>
            </div>
          </Typography>

          <Divider />

          <Typography variant="body2" gutterBottom>
            The iPod is a line of portable media players and multi-purpose
            mobile devices[2] designed and marketed by Apple Inc. The first
            version was released on October 23, 2001, about 8+1⁄2 months after
            the Macintosh version of iTunes was released. As of May 28, 2019,
            only the iPod Touch (7th generation) remains in production.[3] Like
            other digital music players, some versions of the iPod can serve as
            external data storage devices. Prior to macOS 10.15, Apple's iTunes
            software (and other alternative software) could be used to transfer
            music, photos, videos, games, contact information, e-mail settings,
            Web bookmarks, and calendars to the devices supporting these
            features from computers using certain versions of Apple macOS and
            Microsoft Windows operating systems.[4][5] Before the release of iOS
            5, the iPod branding was used for the media player included with the
            iPhone and iPad, a combination of the Music and Videos apps on the
            iPod Touch. As of iOS 5, separate apps named "Music" and "Videos"
            are standardized across all iOS-powered products.[6] While the
            iPhone and iPad have essentially the same media player capabilities
            as the iPod line, they are generally treated as separate products.
            During the middle of 2010, iPhone sales overtook those of the
            iPod.[7]
          </Typography>

          <Divider />
        </Grid>
        <Grid xs={5}>
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
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <ParticlesBg color="#808080" num={10} type="cobweb" bg={true} />
    </>
  );
}
