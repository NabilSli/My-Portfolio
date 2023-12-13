import { Image } from "antd";

const DisplayPictures = ({ pictures }) => {
  return (
    <div className="pictureContainer">
      <Image
        className="projectPictures"
        src={pictures}
        alt="image du projet presenté"
      ></Image>
    </div>
  );
};
export default DisplayPictures;
