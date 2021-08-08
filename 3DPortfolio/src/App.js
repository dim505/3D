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

//to do: add a bunch of shapes and textrures representing your skills,logo will be react synbol ect...
const App = () => {
  const SkillsGroup = useRef();
  const CameraRef = useRef();
  const [ShowLoader, SetShowLoader] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", (event) => onScrolls());
  }, []);

  const onScrolls = (event) => {
    const ScrollPosition = document.body.getBoundingClientRect().top;

    if (Math.sign(ScrollPosition) === -1) {
      CameraRef.current.position.z = ScrollPosition * -0.0125;
    }
  };

  const Stars = new THREE.BufferGeometry();
  const points = [];

  for (let i = 0; i < 10; i++) {
    for (let i = 0; i < 10000; i++) {
      var SingleStar = new THREE.Vector3(
        Math.random() * 45 - 25,
        Math.random() * 45 - 25,
        Math.random() * 100 - 25
      );
      points.push(SingleStar);
    }
  }

  Stars.setFromPoints(points);
  var StarMaterial = new THREE.PointsMaterial({
    color: "#FFFFFF",
    size: 0.1,
    transparent: true
  });

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
            <Fade>
              <div className="introduction-section">
                <div className="intro-cont">
                  <GlitchClip duration={3000}>
                    <Typography display="block" variant="h2">
                      Dmitriy Komerzan
                    </Typography>
                  </GlitchClip>
                  <GlitchClip duration={3500}>
                    <Typography display="block" variant="h5" gutterBottom>
                      Aspiring Full Stack Software Developer
                    </Typography>
                  </GlitchClip>
                  <GlitchClip duration={2500}>
                    <Typography variant="body2" gutterBottom>
                      "They don't make bugs like Bunny anymore" -Anonymous
                    </Typography>
                  </GlitchClip>
                  <GlitchClip duration={2800}>
                    <Typography variant="body1" gutterBottom>
                      Based in Massachetts
                    </Typography>
                  </GlitchClip>
                </div>
              </div>
            </Fade>
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
              <div className="AboutPage">
                <Typography
                  classes={{ root: "AboutHeader" }}
                  variant="h3"
                  gutterBottom
                >
                  A Little Introduction
                </Typography>

                <Typography
                  classes={{ root: "AboutSection" }}
                  variant="h5"
                  gutterBottom
                >
                  Background:
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  Hello, My name is Dmitriy. I'm a motivated technology
                  enthusiast that is eager to become a software developer that
                  graduated with a Bachelors of Science in Computer Information
                  Systems. Professional experience includes providing software
                  and hardware support, website management, Powershell
                  automation, and SQL Report writing.
                </Typography>

                <Typography
                  classes={{ root: "AboutSection" }}
                  variant="h5"
                  gutterBottom
                >
                  Education:
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  <ul>
                    <li>
                      <p>
                        {" "}
                        Bachcelors of Science in Computer Information Systems{" "}
                      </p>
                      <p> Deans List, 3.7 GPA</p>
                    </li>
                  </ul>
                </Typography>

                <Typography
                  classes={{ root: "AboutSection" }}
                  variant="h5"
                  gutterBottom
                >
                  Experience:
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  <ul>
                    <li>
                      <p> 2 years </p>
                      <ol>
                        <li>
                          <p>
                            Expanding my portfolio mainly constanting of build
                            web appplications (React JS, .Net Core, SQL){" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            PROFESSIONAL EXPERIENCE: SQL Report writing,
                            Resolving Application database related issues,
                            Database maintaince, and Powershell Automation{" "}
                          </p>
                        </li>
                      </ol>
                    </li>
                  </ul>
                </Typography>
              </div>
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
