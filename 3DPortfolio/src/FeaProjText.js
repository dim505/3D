import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

//the text portion of the featured projects section in the home section
export default function FeaturedProject(props) {
  return (
    <div
      className={
        props.info.CompDirection === "left"
          ? "FeaturedProject TextRight "
          : "FeaturedProject TextLeft  "
      }
    >
      <Typography
        classes={{
          root: "FeaturedProjectHeader"
        }}
        variant="button"
        gutterBottom
      >
        {" "}
        Featured Project{" "}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {props.info.ProjectName}
      </Typography>

      <p
        className={
          props.info.CompDirection === "left"
            ? "description-contRight"
            : "description-contLeft"
        }
      >
        {" "}
        {props.info.ProjectShortDesc}
      </p>
      <Typography variant="button" display="block" gutterBottom>
        React &#9679; .Net Core &#9679; SQL
      </Typography>

      <a href={props.info.ProjectGithubLink} target="_blank" rel="noreferrer">
        <Tooltip title="Github Link">
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </a>

      <a href={props.info.ProjectLiveLink} target="_blank" rel="noreferrer">
        <Tooltip title="Live Link">
          <IconButton>
            <OpenInNewIcon />
          </IconButton>
        </Tooltip>
      </a>
    </div>
  );
}
