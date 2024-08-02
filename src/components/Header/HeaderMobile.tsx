import styles from "./HeaderMobile.module.scss";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import { useLocation, useNavigate } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import { GoArrowLeft } from "react-icons/go";
import { chatsList } from "../../assets/Chats/chatsList";
import HeaderTitleSKeleton from "../Skeletons/HeaderTitleSKeleton";
import HeaderListSkeleton from "../Skeletons/HeaderListSkeleton";

const HeaderMobile = () => {
  const location = useLocation();
  const path = location.pathname;
  const pathElements = path.split("/");
  const lastElement = pathElements[pathElements.length - 1];
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  const listHeader = ["Новости", "Для вас"];

  const chat = chatsList.find((el) => el.id.toString() === lastElement);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [path]);
  const listHeaderTitle = [
    { link: "/", title: "Главная", id: 1 },
    { link: "/services", title: "Сервисы", id: 2 },
    { link: "/notifications", title: "Уведомления", id: 3 },
    { link: "/me", title: "Ещё", id: 4 },
    { link: "/clip", title: "Клипы", id: 5 },
    { link: "/games", title: "Игры", id: 6 },
    { link: "/steps", title: "Шаги", id: 7 },
    { link: "/acquaintance", title: "Знакомства", id: 8 },
  ];
  return (
    <div
      className={
        path.startsWith("/image/") ? styles.containerPhoto : styles.container
      }
    >
      <div className={styles.head}>
        {isLoading
          ? [...new Array(1)].map((_, i) => (
              <div className="headerSkeleton">
                <HeaderTitleSKeleton key={i} />
              </div>
            ))
          : listHeaderTitle.map(
              (el) => path === el.link && <span key={el.id}>{el.title}</span>
            )}
        {path.startsWith("/image/") && (
          <div>
            <span onClick={() => navigate(-1)} className={styles.back}>
              <GoArrowLeft className={styles.iconBack} />
            </span>
          </div>
        )}
        <div className={styles.icons}>
          {path === "/groups" && !isLoading && (
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
          {path === "/post-comments" && !isLoading && (
            <>
              <span onClick={() => navigate(-1)} className={styles.back}>
                <GoArrowLeft className={styles.iconBack} />
              </span>
              <span>Запись на стене</span>
            </>
          )}
          {path === "/im" && !isLoading && (
            <>
              <span onClick={() => navigate(-1)} className={styles.back}>
                <GoArrowLeft className={styles.iconBack} />
              </span>
              <span>Чаты</span>
            </>
          )}
          {path === "/market" && !isLoading && (
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
          {path === "/friends" && !isLoading && (
            <span onClick={() => navigate(-1)} className={styles.back}>
              <GoArrowLeft className={styles.iconBack} />
              <span>Все друзья</span>
            </span>
          )}
          {path === "/help" && !isLoading && (
            <span onClick={() => navigate(-1)} className={styles.back}>
              <GoArrowLeft className={styles.iconBack} />
              <span>Помощь</span>
            </span>
          )}
          {path === "/audio" && !isLoading && (
            <span onClick={() => navigate(-1)} className={styles.back}>
              <GoArrowLeft className={styles.iconBack} />
              <span> Моя музыка</span>
            </span>
          )}
          {path === "/photos" && !isLoading && (
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
          {path.startsWith("/groups/") && (
            <div className={styles.groupsContent}>
              <span onClick={() => navigate(-1)} className={styles.back}>
                <GoArrowLeft className={styles.iconBack} />
              </span>
              <div className={styles.contentInput}>
                <LiaSearchSolid className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Поиск по стене"
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
            </div>
          )}
        </div>
      </div>
      {path === "/" && (
        <div className={styles.bottom}>
          {isLoading
            ? [...new Array(1)].map((_, i) => (
                <div className="headerListSkeleton">
                  <HeaderListSkeleton key={i} />
                </div>
              ))
            : listHeader.map((el: string, i) => (
                <span
                  className={i === active ? styles.active : ""}
                  key={i}
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
