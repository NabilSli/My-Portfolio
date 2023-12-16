import React from "react";

import Description from "../components/description";
import TechStack from "../components/techStack";
import Gallery from "../components/gallery";

export default function HomePage() {
  return (
    <section className="homeBody">
      <Description />
      <TechStack />
      <Gallery />
    </section>
  );
}
