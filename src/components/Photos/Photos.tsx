import { Link } from "react-router-dom";
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
        <Link className={styles.link} key={el.id} to={`/image/${el.id}`}>
          <img src={el.image} alt="img" />
        </Link>
      ))}
    </div>
  );
};

export default Photos;
