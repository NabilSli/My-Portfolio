import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import fetchData from "../components/fetchData";
import DisplayPictures from "../components/displayPictures";

export default function Projects() {
  const { id } = useParams();
  const { error, isLoading, projects } = fetchData();
  const navigate = useNavigate();

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (!projects || projects.length <= 0) {
    return navigate("/404");
  }

  const currentProject = projects.find((project) => project.id === id);
  if (!currentProject || currentProject.length <= 0) {
    return navigate("/404");
  }
  const title = currentProject.title;
  const pictures = currentProject.pictures;
  const description = currentProject.description;

  return (
    <section className="projectSection">
      <div className="projectHeader">
        <h2 className="projectTitle">{title}</h2>
      </div>
      <div className="projectBody">
        <div className="displayProjects">
          {pictures.map((picture) => (
            <DisplayPictures pictures={picture} key={picture} />
          ))}
        </div>
        <div className="projectDescription">
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
