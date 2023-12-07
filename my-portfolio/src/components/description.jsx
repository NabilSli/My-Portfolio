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
      <article className="texteSection">
        <p className="descriptionTexte">
          Passionné de technologie, je suis un développeur web fullstack
          fraîchement diplômé, issu d&apos;une reconversion professionnelle
          captivante. Mon parcours a;apostypique inclut des expériences
          enrichissantes dans des secteurs aussi divers que le ferroviaire, la
          vente et même la direction d&apos;un restaurant McDonald&apos;s.
          C&apos;est cette diversité qui a façonné ma polyvalence, ma résilience
          et mon aptitude à m&apos;adapter rapidement à des environnements
          variés.
        </p>
        <p className="descriptionTexte">
          Ce changement radical vers le développement web a été motivé par ma
          passion pour la création numérique et ma soif d&apos;apprendre les
          dernières technologies. J&apos;ai choisi ce domaine pour sa dynamique,
          sa créativité et ses défis stimulants. Mon objectif est de combiner
          mes compétences acquises dans des secteurs traditionnels avec mon
          expertise croissante en développement web pour apporter des solutions
          innovantes.
        </p>
      </article>
    </section>
  );
}

export default Description;
