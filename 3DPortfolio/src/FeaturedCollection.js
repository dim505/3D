import React, { useEffect, useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FeaturedProjectomp from "./FeaturedProject";
import Pulse from "react-reveal/Pulse";

//parent component of the featured projects collection  in the home page
const FeaturedProjects = [
  {
    CompDirection: "left",
    ProjectName: "Social Media",
    ProjectShortDesc:
      "React js web app that allows users to add posts, follow people and chat with them",
    ProjectInfoUrl: "SocialMedia",
    ProjectImageURL:
      "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (4).JPEG",
    ProjectGithubLink: "https://github.com/dim505/SocialMedia",
    ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
  },

  {
    CompDirection: "Right",
    ProjectName: "AMS (Landlord Side)",
    ProjectShortDesc:
      "React js web app that allows a landlord to manage his apartments and keep track of his tenants",
    ProjectInfoUrl: "AMS_LL",
    ProjectImageURL:
      "https://shellstorage123.blob.core.windows.net/reactams/LL (3).JPEG",
    ProjectGithubLink: "https://github.com/dim505/ApartmentMangementSystem",
    ProjectLiveLink: "https://amsfrontend.azurewebsites.net/"
  },

  {
    CompDirection: "left",
    ProjectName: "AMS (Tenant Side)",
    ProjectShortDesc:
      "React js web app that allows a tenant to pay rent and see news related to his apartment",
    ProjectInfoUrl: `AMS_TS`,
    ProjectImageURL:
      "https://shellstorage123.blob.core.windows.net/reactams/TS (3).JPEG",
    ProjectGithubLink: "https://github.com/dim505/ApartmentMangementSystem",
    ProjectLiveLink: "https://amstenantfrontend.azurewebsites.net/"
  }
];

export default function FeaturedCollection() {
  return (
    <div className="FeaturedCollectionParent">
      <Typography variant="h4" gutterBottom>
        Some Full Stack Projects
      </Typography>

      {FeaturedProjects.map((FeaturedProject) => (
        <Pulse>
          <FeaturedProjectomp info={FeaturedProject} />
        </Pulse>
      ))}

      <Grid container justify="center"></Grid>
    </div>
  );
}
