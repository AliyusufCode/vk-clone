// import { TiArrowForwardOutline } from "react-icons/ti";
import styles from "./OpenedGroup.module.scss";
// import { BiComment } from "react-icons/bi";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { HiOutlineEye } from "react-icons/hi";
export const OpenedGroup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headGroup}>
        <span className={styles.groupName}>Фильмы</span>
        <span className={styles.infoGroup}>
          <p>✔ Вы подписаны</p> <p>754тыс подписчиков</p>
        </span>
      </div>
      <div className={styles.postsContent}>
        <span className={styles.group}>
          <div className={styles.topGroup}>
            <img
              src="https://i.pinimg.com/originals/2c/06/b7/2c06b77b61df9fff9e4f49ee2eabb30e.jpg"
              alt="img"
            />
            <div className={styles.groupContent}>
              <span className={styles.groupName}>Фильмы</span>
              <span className={styles.time}> 17:22</span>
            </div>
          </div>
          <p>Хорошая группа мы.</p>
          <img
            src="https://i.pinimg.com/originals/2c/06/b7/2c06b77b61df9fff9e4f49ee2eabb30e.jpg"
            alt="img"
            className={styles.postImg}
          />
        </span>
        {/* <div className={styles.bottomContainer}>
          <div className={styles.buttons}>
            <span className={styles.layout}>
              <IoMdHeartEmpty className={styles.icon} />
              <span>122</span>
            </span>
            <span className={styles.layout}>
              <BiComment className={styles.icon} />
              <span>1212</span>
            </span>
            <span className={styles.layout}>
              <TiArrowForwardOutline className={styles.icon} />
              <span>{212}</span>
            </span>
          </div>
          <div className={styles.view}>
            <HiOutlineEye className={styles.iconView} />
            <span>{1222}K</span>
          </div>
          <br />
        </div> */}
      </div>
    </div>
  );
};
