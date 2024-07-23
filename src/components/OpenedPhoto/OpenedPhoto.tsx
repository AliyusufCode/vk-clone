import { useLocation } from "react-router";
import styles from "./OpenedPhoto.module.scss";
import { photosList } from "../../assets/Photos/photoList";
const OpenedPhoto = () => {
  const location = useLocation();
  const path = location.pathname;
  const pathElements = path.split("/");
  const lastElement = pathElements[pathElements.length - 1];
  const photo = photosList.find((el) => el.id.toString() === lastElement);
  return (
    <div className={styles.container}>
      <img src={photo?.image} alt="img" />
    </div>
  );
};

export default OpenedPhoto;
