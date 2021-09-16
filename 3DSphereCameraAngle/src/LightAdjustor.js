import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import HighlightIcon from "@material-ui/icons/Highlight";
import Menu from "@material-ui/core/Menu";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

//component that holds the slider,menu and buttons that update the light brightness
var ClickedLight = "";
const LightAdjustor = (props) => {
  //opens up slider
  const [anchorEl, setAnchorEl] = React.useState(null);
  //opens menu  with buttons asking to set brightness levels
  const [ShowLightSliderMenu, SetShowLightSliderMenu] = React.useState(false);
  //keeps track of the slider value (brightness)
  const [SliderValue, SetSliderValue] = React.useState(0);
  //opens slider and sets initial value
  const OpenShowLightSliderMenu = async (...Args) => {
    //sets initial value of slider based on button clicked
    await SetSliderValue(props.LightBrightness[Args[2]]);
    //opens slider
    setAnchorEl(Args[0].target);

    //keeps track of light thats being adjusted
    ClickedLight = Args[2];
  };

  //updates slider value as user adjust the slide
  const HandleSliderChange = (...Args) => {
    SetSliderValue(props.LightBrightness[ClickedLight]);
    props.HandleLightBrightness(ClickedLight, Args[1]);
  };

  return (
    <>
      <div id="LightAdjustBtn">
        {!ShowLightSliderMenu && (
          <IconButton
            onClick={() => {
              SetShowLightSliderMenu(true);
            }}
          >
            <HighlightIcon />
          </IconButton>
        )}
        {ShowLightSliderMenu && (
          <ButtonGroup
            size="small"
            orientation="vertical"
            color="primary"
            variant="text"
          >
            <Button
              onClick={(event) =>
                OpenShowLightSliderMenu(event, 40, "KeyLight")
              }
            >
              Set Keylight brightness
            </Button>
            <Button
              onClick={(event) =>
                OpenShowLightSliderMenu(event, 30, "FillLight")
              }
            >
              Set Filllight brightness
            </Button>
            <Button
              onClick={(event) =>
                OpenShowLightSliderMenu(event, 10, "RimLight")
              }
            >
              Set Rimlight brightness
            </Button>
            <Button onClick={(event) => SetShowLightSliderMenu(false)}>
              Close Menu
            </Button>
          </ButtonGroup>
        )}

        <Menu
          classes={{ paper: "BrightnessMenu" }}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => {
            setAnchorEl(false);
          }}
        >
          <Typography variant="subtitle2" gutterBottom>
            Move slider to adjust brightness
          </Typography>

          <Slider
            onChange={HandleSliderChange}
            value={SliderValue}
            min={1}
            max={100}
            step={1}
          />
        </Menu>
      </div>
    </>
  );
};

export default LightAdjustor;
