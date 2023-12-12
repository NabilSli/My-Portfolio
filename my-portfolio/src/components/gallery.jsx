import React from "react";

import { Card } from "./cards";
import useProjects from "./fetchData";

// NOTE: this function uses the fetch to either show projetcs or
//       loading while it get the data or an error if ther is no data
export default function Gallery() {
  const { error, isLoading, projects } = useProjects();

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (!projects || !projects.length) {
    return <p>Aucun logements a afficher</p>;
  }

  return (
    <section className="gallery">
      <div className="cardsGallery">
        {projects.map((project) => (
          <Card
            iconSrc={project.iconSrc}
            title={project.title}
            description={project.description}
            key={project.id}
            id={project.id}
          />
        ))}
      </div>
    </section>
  );
}
