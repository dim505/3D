import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  Suspense
} from "react";
import "./styles.scss";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import Sphere from "./Sphere";
import { OrbitControls, Stars, Text } from "@react-three/drei";
import * as THREE from "three";
import Typography from "@material-ui/core/Typography";
import TypeWreriter from "react-typewriter";
import Skills from "./Skills";
import Torus from "./Torus";
import FeaturedCollection from "./FeaturedCollection";
import Fade from "react-reveal/Fade";
import Loader from "react-js-loader";
import Grid from "@material-ui/core/Grid";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import IntroText from "./IntroText";
import AboutMe from "./AboutMe";
//contains that holds all the elements for the application
const App = () => {
  const CameraRef = useRef();
  //shows the preloader while the app is loading
  const [ShowLoader, SetShowLoader] = useState(true);

  //adds a scroll event listener to the main body
  useEffect(() => {
    window.addEventListener("scroll", (event) => onScrolls());
  }, []);

  //function fires on every scroll
  const onScrolls = (event) => {
    //gets scroll position
    const ScrollPosition = document.body.getBoundingClientRect().top;
    //updates camera position of canvas on each scroll
    if (Math.sign(ScrollPosition) === -1) {
      CameraRef.current.position.z = ScrollPosition * -0.0125;
    }
  };

  const Stars = new THREE.BufferGeometry();
  const points = [];

  //loops again 10 times as CODESANDBOX only allows interations of 10000
  for (let i = 0; i < 10; i++) {
    //loops through and generates points for stars
    for (let i = 0; i < 10000; i++) {
      //generates a rondom point on a star
      var SingleStar = new THREE.Vector3(
        Math.random() * 45 - 25,
        Math.random() * 45 - 25,
        Math.random() * 100 - 25
      );
      points.push(SingleStar);
    }
  }
  Stars.setFromPoints(points);
  //determines what the star is going to be made of
  var StarMaterial = new THREE.PointsMaterial({
    color: "#FFFFFF",
    size: 0.1,
    transparent: true
  });

  //taking control of the cavas camera so you can manipulate it
  const Camera = (props) => {
    const set = useThree((state) => state.set);
    useEffect(() => void set({ camera: props.refs.current }), []);
    useFrame(() => props.refs.current.updateMatrixWorld());
    return <perspectiveCamera ref={props.refs} {...props} />;
  };
  return (
    <>
      {" "}
      {ShowLoader !== true ? (
        <div
          onScroll={(event) => console.log("scroll")}
          className="TextContent"
        >
          <div className="MainColumn">
            <IntroText />

            <div className="BlankPage"> </div>
            <div className="BlankPage"> </div>
            <Grid container>
              <Grid item xs={6}>
                <Fade>
                  <blockquote>
                    <Typography classes={{ root: "End" }} variant="h2">
                      This is just some experimentation with THREE.JS
                    </Typography>
                  </blockquote>
                </Fade>
              </Grid>
              <Grid item xs={6} />
            </Grid>
            <div className="BlankPage"> </div>
            <Fade>
              <FeaturedCollection />
            </Fade>
            <div className="BlankHalfPage"> </div>

            <Fade>
              <AboutMe />
            </Fade>

            <div className="BlankPage">
              <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                  <Fade>
                    <blockquote>
                      <Typography classes={{ root: "End" }} variant="h3">
                        Thanks for visiting my site!
                      </Typography>
                    </blockquote>
                  </Fade>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      ) : (
        <div className="BlankPage">
          <Loader
            title="LOADING......"
            type="box-up"
            bgColor={"#FFFFFF"}
            size={600}
          />
        </div>
      )}
      <div id="CanvasHolder">
        <Suspense fallback={() => {}}>
          <Canvas
            onCreated={() => {
              setTimeout(() => {
                SetShowLoader(false);
              }, 4000);
            }}
          >
            <Camera refs={CameraRef} />
            <Sphere />
            <Torus />

            <group rotation={[0, 1.5, 0]} position={[0, 0, 5]}>
              <Skills SkillsPosition={0} />
            </group>
            <OrbitControls />
            <ambientLight intensity={10} />
            <pointLight />
            <color attach="background" args={["#000000"]} />
            <points geometry={Stars} material={StarMaterial} />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
};

export default App;
