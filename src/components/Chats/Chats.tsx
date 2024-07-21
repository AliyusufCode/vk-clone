import { chatsList } from "../../assets/Chats/chatsList";
import styles from "./Chats.module.scss";

type ChatsType = {
  name: string;
  avatar: string;
  lastMessage: string;
  id: number;
};
const Chats = () => {
  return (
    <div className={styles.container}>
      {chatsList.map((el: ChatsType) => (
        <div className={styles.сhats} key={el.id}>
          <img src={el.avatar} alt="img" />
          <div className={styles.infoChat}>
            <span className={styles.name}>{el.name}</span>
            <span className={styles.msg}>
              {el.lastMessage.length > 7
                ? `${el.lastMessage.slice(0, 35)}...`
                : el.lastMessage}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
