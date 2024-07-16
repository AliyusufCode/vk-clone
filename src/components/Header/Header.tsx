import Player from "../Player/Player";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import { FaRegBell } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
const Header = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src="/vk.svg" alt="vk" className={styles.icon} />
            <span>ВКОНТАКТЕ</span>
          </div>
          <Search />
          <div className={styles.bellContainer}>
            <FaRegBell className={styles.bell} />
          </div>
          <div className={styles.playerContainer}>
            <Player />
          </div>
        </div>
        <div className={styles.userContainer}>
          <img src="/image.png" alt="" />
          <MdArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
