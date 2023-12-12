const DisplayPictures = ({ pictures }) => {
  return (
    <div className="pictureContainer">
      <a href={pictures} target="_blank" rel="noreferrer">
        <img
          className="projectPictures"
          src={pictures}
          alt="image du projet presenté"
        ></img>
      </a>
    </div>
  );
};
export default DisplayPictures;
