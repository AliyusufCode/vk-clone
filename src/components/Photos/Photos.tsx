import { photosList } from "../../assets/Photos/photoList";
import styles from "./Photos.module.scss";
type PhotosList = {
  image: string;

  id: number;
};
const Photos = () => {
  return (
    <div className={styles.container}>
      {photosList.map((el: PhotosList) => (
        <img src={el.image} key={el.id} alt="img" />
      ))}
    </div>
  );
};

export default Photos;
