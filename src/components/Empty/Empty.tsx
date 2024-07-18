import styles from "./Empty.module.scss";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { PiSmileySadLight } from "react-icons/pi";
import { useNavigate } from "react-router";
const Empty = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <span>Здесь пока пусто</span>
      <span>
        <PiSmileySadLight className={styles.icon} />
      </span>
      <span className={styles.backContent} onClick={() => navigate(-1)}>
        <MdOutlineArrowBackIos className={styles.back} />
        <p>Назад</p>
      </span>
    </div>
  );
};

export default Empty;
