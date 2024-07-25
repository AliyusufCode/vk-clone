import { useState } from "react";
import { chatsList } from "../../assets/Chats/chatsList";
import styles from "./Chats.module.scss";
import { LiaSearchSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

type ChatsType = {
  name: string;
  avatar: string;
  lastMessage?: string;
  id: number;
};
const Chats = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.contentInput}>
        <LiaSearchSolid className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Поиск по чатам"
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue && (
          <IoMdClose className={styles.clearIcon} onClick={handleClearInput} />
        )}
      </div>
      {chatsList.map((el: ChatsType) => (
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
