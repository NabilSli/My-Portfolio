import React from "react";

import Description from "../components/description";
import TechStack from "../components/techStack";

export default function HomePage() {
  return (
    <section className="homeBody">
      <Description />
      <TechStack />
    </section>
  );
}
