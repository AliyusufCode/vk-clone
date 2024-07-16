import styles from "./HeaderMobile.module.scss";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { CgSearch } from "react-icons/cg";
import { useState, useEffect } from "react";

const HeaderMobile = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 130;
    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  const headerStyle = {
    top: visible ? "0" : "-90px",
    transition: "top 0.3s",
  };

  return (
    <div className={styles.container} style={headerStyle}>
      <span>Главная</span>
      <div className={styles.icons}>
        <CgSearch className={styles.icon} />
        <HiOutlinePlusCircle className={styles.iconLast} />
      </div>
    </div>
  );
};

export default HeaderMobile;
