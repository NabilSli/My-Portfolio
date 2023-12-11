const DisplayPictures = ({ pictures }) => {
  return (
    <div className="pictureContainer">
      <a>
        <img
          className="projectPictures"
          src={pictures}
          alt="image du projet presenter"
        ></img>
      </a>
    </div>
  );
};
export default DisplayPictures;
