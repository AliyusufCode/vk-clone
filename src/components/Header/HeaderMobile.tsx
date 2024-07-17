import styles from "./HeaderMobile.module.scss";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { CgSearch } from "react-icons/cg";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";
const HeaderMobile = () => {
  const location = useLocation();
  const path = location.pathname;
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // const [active, setActive] = useState(0);
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
    top: visible ? "0" : "-120px",
    transition: "top 0.3s",
  };
  // const listHeader = ["Новости", "Для вас"];
  return (
    <div className={styles.container} style={headerStyle}>
      <div className={styles.head}>
        {path === "/" ? <span>Главная</span> : <span>Сервисы</span>}
        <div className={styles.icons}>
          <CgSearch className={styles.icon} />

          {path === "/" ? (
            <HiOutlinePlusCircle className={styles.iconLast} />
          ) : (
            <RxHamburgerMenu className={styles.iconLast} />
          )}
        </div>
      </div>
      {/* {path === "/" && (
        <div className={styles.bottom}>
          {listHeader.map((el: string, i) => (
            <span
              className={i === active ? styles.active : ""}
              key={el}
              onClick={() => setActive(i)}
            >
              {el}
            </span>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default HeaderMobile;
