import styles from "./HeaderMobile.module.scss";
// import { HiOutlinePlusCircle } from "react-icons/hi2";
// import { CgSearch } from "react-icons/cg";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
// import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import { GoArrowLeft } from "react-icons/go";
import { chatsList } from "../../assets/Chats/chatsList";
const HeaderMobile = () => {
  const location = useLocation();
  const path = location.pathname;
  const pathElements = path.split("/");
  const lastElement = pathElements[pathElements.length - 1];

  console.log(lastElement);
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

  const chat = chatsList.find((el) => el.id.toString() === lastElement);

  return (
    <div className={styles.container} style={headerStyle}>
      <div className={styles.head}>
        {path === "/" && <span>Главная</span>}
        {path === "/services" && <span>Сервисы</span>}

        {path === "/notifications" && <span>Уведомления</span>}
        {path === "/me" && <span>Ещё</span>}
        {path === "/clip" && <span>Клипы</span>}
        {path === "/games" && <span>Игры</span>}
        {path === "/steps" && <span>Шаги</span>}
        {path === "/acquaintance" && <span>Знакомства</span>}
        <div className={styles.icons}>
          {path === "/groups" && (
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
          )}
          {path === "/im" && (
            <>
              <span onClick={() => navigate(-1)} className={styles.back}>
                <GoArrowLeft className={styles.iconBack} />
              </span>

              <span>Чаты</span>
            </>
          )}
          {path === "/market" && (
            <>
              <span onClick={() => navigate(-1)} className={styles.back}>
                <GoArrowLeft className={styles.iconBack} />
              </span>

              <div className={styles.contentInput}>
                <LiaSearchSolid className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Поиск"
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
          )}
          {path === "/friends" && (
            <span onClick={() => navigate(-1)} className={styles.back}>
              <GoArrowLeft className={styles.iconBack} />
              <span>Все друзья</span>
            </span>
          )}
          {path === "/help" && (
            <span onClick={() => navigate(-1)} className={styles.back}>
              <GoArrowLeft className={styles.iconBack} />
              <span>Помощь</span>
            </span>
          )}
          {path === "/audio" && (
            <span onClick={() => navigate(-1)} className={styles.back}>
              <GoArrowLeft className={styles.iconBack} />
              <span> Моя музыка</span>
            </span>
          )}
          {path === "/photos" && (
            <span onClick={() => navigate(-1)} className={styles.back}>
              <GoArrowLeft className={styles.iconBack} />
              <span>Мои фотографии</span>
            </span>
          )}
          {path.startsWith("/im/") && (
            <div className={styles.chat}>
              <div className={styles.userChatContent}>
                <span onClick={() => navigate(-1)} className={styles.back}>
                  <GoArrowLeft className={styles.iconBackChat} />
                </span>
                <img src={chat?.avatar} alt="img" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 10,
                  }}
                >
                  <span className={styles.chatUser}>{chat?.name}</span>
                  <p>был в сети два часа назад</p>
                </div>
              </div>

              <HiDotsHorizontal className={styles.chatIcon} />
            </div>
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
