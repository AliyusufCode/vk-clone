import { useEffect, useState } from "react";
import { chatsList } from "../../assets/Chats/chatsList";
import styles from "./Chats.module.scss";
import { LiaSearchSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import ChatSkeleton from "../Skeletons/ChatsSceleton";
import InputSkeleton from "../Skeletons/InputSkeleton";

type ChatsType = {
  name: string;
  avatar: string;
  lastMessage?: string;
  id: number;
};
const Chats = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClearInput = () => {
    setInputValue("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.contentInput}>
        {isLoading ? (
          [...new Array(1)].map((_, i) => <InputSkeleton key={i} />)
        ) : (
          <>
            <LiaSearchSolid className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Поиск по чатам"
              value={inputValue}
              onChange={handleInputChange}
            />
          </>
        )}
        {inputValue && (
          <IoMdClose className={styles.clearIcon} onClick={handleClearInput} />
        )}
      </div>
      {isLoading
        ? [...new Array(11)].map((_, i) => <ChatSkeleton key={i} />)
        : chatsList.map((el: ChatsType) => (
            <Link to={`/im/${el.id}`} key={el.id} className={styles.link}>
              <div className={styles.сhats}>
                <img src={el.avatar} alt="img" />
                <div className={styles.infoChat}>
                  <span className={styles.name}>{el.name}</span>
                  <span className={styles.msg}>
                    {el.lastMessage
                      ? el.lastMessage.length > 7
                        ? `${el.lastMessage.slice(0, 35)}...`
                        : el.lastMessage
                      : "Здесь пока пусто"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default Chats;
