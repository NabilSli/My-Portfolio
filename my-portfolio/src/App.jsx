import "./App.css";

import profilePicture from "./assets/me.png";

function App() {
  return (
    <>
      <section className="header">
        <img class="profile-picture" src={profilePicture} alt="Nabil Slimani" />
        <h1>Hey 👋 I'm Nabil</h1>
        <p className="read-the-docs">
          Full stack developer, skilled in React, Node.js, Express, MongoDB.
        </p>
      </section>
      <section className="cta">
        <button className="button-projects">Projects</button>
      </section>
      <section className="tech-stack">
        <img
          src="https://img.shields.io/badge/-HTML5-000?logo=html5"
          alt="HTML5"
        />
        <img
          src="https://img.shields.io/badge/-JavaScript-000?logo=javascript"
          alt="JavaScript"
        />
        <img
          src="https://img.shields.io/badge/-TypeScript-000?logo=typescript"
          alt="TypeScript"
        />
        <img
          src="https://img.shields.io/badge/-React-000?logo=react"
          alt="React"
        />
      </section>
    </>
  );
}

export default App;
