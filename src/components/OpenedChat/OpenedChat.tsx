import styles from "./OpenedChat.module.scss";
const OpenedChat = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://i.pinimg.com/736x/6f/15/63/6f1563ae05433886179a695ad111f6d4.jpg"
        alt="img"
      />
      <div className={styles.messageContainer}>
        <div className={styles.friendMessage}>
          <span> Сообщение друга</span>
        </div>
        <div className={styles.myMessage}>
          <span> Моё сообщение</span>
        </div>
      </div>
    </div>
  );
};

export default OpenedChat;
