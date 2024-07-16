import styles from "./InterestingNews.module.scss";
import { FaFire } from "react-icons/fa6";
const InterestingNews = () => {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaFire className={styles.icon} />
        Сперва интересные
      </div>

      <input type="checkbox" />
    </div>
  );
};

export default InterestingNews;
