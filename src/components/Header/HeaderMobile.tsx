import styles from "./HeaderMobile.module.scss";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { CgSearch } from "react-icons/cg";
const HeaderMobile = () => {
  return (
    <div className={styles.container}>
      <span>Главная</span>
      <div className={styles.icons}>
        <CgSearch className={styles.icon} />
        <HiOutlinePlusCircle className={styles.iconLast} />
      </div>
    </div>
  );
};

export default HeaderMobile;
