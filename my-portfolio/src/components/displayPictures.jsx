const DisplayPictures = ({ pictures }) => {
  return (
    <div className="pictureContainer">
      <a>
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
