import profilePicture from "../assets/me.png";

function Description() {
  return (
    <section className="description">
      <img
        className="profilePicture"
        src={profilePicture}
        alt="Nabil Slimani"
      />
      <h1>Hey 👋 I&apos;m Nabil</h1>
      <p className="descriptionTexte">
        Full stack developer, skilled in React, Node.js, Express, MongoDB.
      </p>
    </section>
  );
}

export default Description;
