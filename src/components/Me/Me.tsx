import { categoryList, mobileList } from "../../assets/sidebarList";
import styles from "./Me.module.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
type MeProps = {
  title: string;
  icon: any;
  link: string;
};
const Me = () => {
  return (
    <div className={styles.wrapper}>
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
        <div className={styles.lists}>
          {mobileList.map((el: MeProps) => (
            <div className={styles.content}>
              <el.icon className={styles.icon} />
              <p>{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Me;
