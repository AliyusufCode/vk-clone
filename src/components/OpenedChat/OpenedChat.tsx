import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import styles from "./OpenedChat.module.scss";
import { RootState } from "../../redux/store";

const OpenedChat = () => {
  const messages = useSelector((state: RootState) => state.chat.messages);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className={styles.container}>
      <img
        src="https://i.pinimg.com/736x/6f/15/63/6f1563ae05433886179a695ad111f6d4.jpg"
        alt="img"
      />
      <div className={styles.messageContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.isMyMessage ? styles.myMessage : styles.friendMessage
            }
          >
            <div className={styles.message}>
              <span>{message.text}</span>
              <p>{message.time}</p>
            </div>
            {index === messages.length - 1 && <div ref={lastMessageRef} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenedChat;
