import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import IconButton from "@material-ui/core/IconButton";
import FeaProjText from "./FeaProjText.js";
import FeaProjImgOverLay from "./FeaProjImgOverLay";


//This the feature project component that holds the text and image overlay
export default function FeaturedProject(props) {
  const RenderComponent = () => {
    if (props.info.CompDirection === "left") {
      return (
        <>
          <Grid item sm={6} xs={12}>
            <FeaProjImgOverLay info={props.info} />
          </Grid>

          <Grid item sm={6} xs={12}>
            <FeaProjText info={props.info} />
          </Grid>
        </>
      );
    } else {
      return (
        <>
          <Grid item sm={6} xs={12}>
            <FeaProjText info={props.info} />
          </Grid>

          <Grid item sm={6} xs={12}>
            <FeaProjImgOverLay info={props.info} />
          </Grid>
        </>
      );
    }
  };

  return (
    <>
      <Grid container justify="center">
        {RenderComponent()}
      </Grid>
    </>
  );
}
