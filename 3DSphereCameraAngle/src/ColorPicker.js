import React, { Component } from "react";
import { BlockPicker } from "react-color";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Menu from "@material-ui/core/Menu";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import ColorLensIcon from "@material-ui/icons/ColorLens";
//color menu used to change the color of the lights
const ColorPicker = (props) => {
  //gets the anchor for the menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  //sets the spotlight to change the color on
  const [SpotLight, setSpotLight] = React.useState(null);
  //sets the color that needs to be changed
  const [color, SetPickerColor] = React.useState("#FFFFFF");
  //hides and displays the menu
  const [ShowColorPallet, SetShowColorPallet] = React.useState(false);
  //opens the color pallet to change the color
  const handleClick = (event, SpotLight) => {
    setAnchorEl(event.currentTarget);
    setSpotLight(SpotLight);
    var PickerColor = props.SetSliderColor(SpotLight);
    SetPickerColor(PickerColor);
  };
  //closes the menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  //updates the color of the light
  const handleColorChange = (color) => {
    SetPickerColor(color);
    props.SetSpotLightColor(color.hex, SpotLight);
  };
  return (
    <div className="ColorPickerContainer">
      {!ShowColorPallet && (
        <IconButton
          onClick={() => {
            SetShowColorPallet(true);
          }}
        >
          <ColorLensIcon />
        </IconButton>
      )}

      <Menu
        classes={{ paper: "ColorMenu" }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <BlockPicker color={color} onChange={handleColorChange} />
      </Menu>
      {ShowColorPallet && (
        <ButtonGroup
          size="small"
          orientation="vertical"
          color="primary"
          variant="text"
        >
          {" "}
          immer light on the flip side of the key light, used to fill in the
          shadows from the key light somewhat and create a more appealing
          gradient of shades
          <Tooltip
            placement="left"
            title="This is the main light that points toward the object of focus and generates strong shadows"
          >
            <Button onClick={(event) => handleClick(event, "KeyLight")}>
              Pick Keylight Color
            </Button>
          </Tooltip>
          <Tooltip
            placement="left"
            title="This is a dimmer light oppsite of the key light used to dampen the strong shadows created by the keylight"
          >
            <Button onClick={(event) => handleClick(event, "FillLight")}>
              Pick Fill Light Color
            </Button>
          </Tooltip>
          <Tooltip
            placement="left"
            title="A light behind the object of focus to help the subject pop out of the background"
          >
            <Button onClick={(event) => handleClick(event, "RimLight")}>
              Pick Rim Light Color
            </Button>
          </Tooltip>
          <Button onClick={(event) => SetShowColorPallet(false)}>
            Close Menu
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default ColorPicker;
