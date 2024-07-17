import styles from "./Me.module.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Me = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <span className={styles.layoutProfile}>
          <img src={"image.png"} alt="img" className={styles.img} />
          <div className={styles.infoChat}>
            <span className={styles.name}>Алиюсуф Хадиев</span>
            <span className={styles.msg}>Перейти в профиль</span>
          </div>
        </span>
        <MdOutlineKeyboardArrowRight className={styles.icon} />
      </div>
    </div>
  );
};

export default Me;
