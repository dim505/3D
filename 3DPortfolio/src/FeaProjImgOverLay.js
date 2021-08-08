import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
//image overlay for the featured projects section on the home page
export default function FeaProjImgOverLay(props) {
  return (
    <div className="PicContainer">
      <a target="_blank" href={props.info.ProjectGithubLink}>
        <img src={props.info.ProjectImageURL} />

        <div className="OverLay"></div>
      </a>
    </div>
  );
}
