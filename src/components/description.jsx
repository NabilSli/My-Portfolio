import React from "react";
import profilePicture from "../assets/me.png";

function Description() {
  return (
    <section className="description">
      <img
        className="profilePicture"
        src={profilePicture}
        alt="Nabil Slimani"
      />
      <h1>Salut 👋 Moi c&apos;est Nabil</h1>
      <article className="texteSection">
        <p className="descriptionTexte">
          Passionné par la technologie, j&apos;ai récemment plongé dans le
          développement web après des expériences variées en vente et gestion.
          J&apos;aime créer des solutions innovantes en utilisant mes
          compétences en communication et ma capacité à résoudre des problèmes.
          Mon objectif ? Créer des expériences numériques uniques et captivantes
        </p>
      </article>
    </section>
  );
}

export default Description;
