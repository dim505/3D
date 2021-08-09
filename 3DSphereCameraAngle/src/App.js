import React, { Component, Suspense } from "react";
import "./styles.scss";
import { Canvas } from "react-three-fiber";
import Dice from "./Dice";
import KeyLight from "./KeyLight";
import Floor from "./Floor";
import Backdrop from "./Backdrop";
import FillLight from "./FillLight";
import RimLight from "./RimLight";
import ColorPicker from "./ColorPicker";
export default function App() {
  const [FillLightColor, SetFillLightColor] = React.useState("#3737f6");
  const [KeyLightColor, SetKeyLightColor] = React.useState("#ff0505");
  const [RimLightColor, SetRimLightColor] = React.useState("#fff");

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

  return (
    <>
      <Canvas>
        <KeyLight brightness={40} color={KeyLightColor} />
        <FillLight brightness={13} color={FillLightColor} />
        <RimLight brightness={30} color={RimLightColor} />
        <Suspense fallback={null}>
          <Dice />
        </Suspense>
        <Floor />
        <Backdrop />
      </Canvas>

      <ColorPicker
        SetSliderColor={SetSliderColor}
        SetSpotLightColor={SetSpotLightColor}
      />
    </>
  );
}
