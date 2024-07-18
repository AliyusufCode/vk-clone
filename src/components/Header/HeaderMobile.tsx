import styles from "./HeaderMobile.module.scss";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { CgSearch } from "react-icons/cg";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const HeaderMobile = () => {
  const location = useLocation();
  const path = location.pathname;
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };
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
  const listHeader = ["Новости", "Для вас"];
  return (
    <div className={styles.container} style={headerStyle}>
      <div className={styles.head}>
        {path === "/" ? <span>Главная</span> : null}
        {path === "/services" ? <span>Сервисы</span> : null}
        {path === "/im" ? <span>Чаты</span> : null}
        {path === "/notifications" ? <span>Уведомления</span> : null}
        {path === "/me" ? <span>Ещё</span> : null}
        {path === "/friends" ? <span>Все друзья</span> : null}
        {path === "/clip" ? <span>Клипы</span> : null}

        <div className={styles.icons}>
          {path === "/groups" ? null : <CgSearch className={styles.icon} />}
          {/* {path === "/clip" ? null : <CgSearch className={styles.icon} />} */}

          {path === "/" ? (
            <HiOutlinePlusCircle className={styles.iconLast} />
          ) : path === "/groups" ? (
            <>
              <span onClick={() => navigate(-1)} className={styles.back}>
                <GoArrowLeft className={styles.iconBack} />
              </span>

              <div className={styles.contentInput}>
                <LiaSearchSolid className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Поиск по сообществам"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                {inputValue && (
                  <IoMdClose
                    className={styles.clearIcon}
                    onClick={handleClearInput}
                  />
                )}
              </div>
            </>
          ) : (
            <RxHamburgerMenu className={styles.iconLast} />
          )}
        </div>
      </div>
      {path === "/" && (
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
      )}
    </div>
  );
};

export default HeaderMobile;
