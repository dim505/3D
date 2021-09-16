import React, { Component, Suspense, useEffect } from "react";
import "./styles.scss";
import { Canvas } from "react-three-fiber";
import Dice from "./Dice";
import KeyLight from "./KeyLight";
import Floor from "./Floor";
import Backdrop from "./Backdrop";
import FillLight from "./FillLight";
import RimLight from "./RimLight";
import * as THREE from "three";
import ColorPicker from "./ColorPicker";
import { OrbitControls, Stars } from "@react-three/drei";
import LightAdjustor from "./LightAdjustor";

//root component that stores the child components
export default function App() {
  //keeps track of the lights colors
  const [FillLightColor, SetFillLightColor] = React.useState("#3737f6");
  const [KeyLightColor, SetKeyLightColor] = React.useState("#ff0505");
  const [RimLightColor, SetRimLightColor] = React.useState("#fff");
  //keeps track of the brightness levels
  const [LightBrightness, SetLightBrightness] = React.useState({
    KeyLight: 40,
    RimLight: 13,
    FillLight: 30
  });
  //updates the color of the selected light
  const SetSpotLightColor = (color, SpotLight) => {
    switch (SpotLight) {
      case "FillLight":
        SetFillLightColor(color);
        break;
      case "KeyLight":
        SetKeyLightColor(color);
        break;
      default:
        SetRimLightColor(color);
    }
  };
  //updates the color pallet on initial load
  const SetSliderColor = (SpotLight) => {
    switch (SpotLight) {
      case "FillLight":
        return FillLightColor;

      case "KeyLight":
        return KeyLightColor;

      default:
        return RimLightColor;
    }
  };

  //updates the brightness of the selected light
  const HandleLightBrightness = (light, brightness) => {
    SetLightBrightness({ ...LightBrightness, [light]: brightness });
  };
  return (
    <>
      <Canvas camera={{ position: [1, 1, 10] }}>
        <KeyLight brightness={LightBrightness.KeyLight} color={KeyLightColor} />
        <FillLight
          brightness={LightBrightness.FillLight}
          color={FillLightColor}
        />
        <RimLight brightness={LightBrightness.RimLight} color={RimLightColor} />
        <Suspense fallback={null}>
          <Dice />
        </Suspense>
        <OrbitControls />
        <Floor />
        <Backdrop />
      </Canvas>
      <LightAdjustor
        LightBrightness={LightBrightness}
        HandleLightBrightness={HandleLightBrightness}
      />
      <ColorPicker
        SetSliderColor={SetSliderColor}
        SetSpotLightColor={SetSpotLightColor}
      />
    </>
  );
}
