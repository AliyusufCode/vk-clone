import styles from "./EmojiPanel.module.scss";

const EmojiPanel = ({ handleEmojiSelection }: any) => {
  const emojis = ["🤣", "🥹", "👍", "🥰", "🥲", "🤝", "🌚", "😡", "😇", "🖕"];

  return (
    <div className={styles.emojiPanel}>
      {emojis.map((emoji, index) => (
        <span key={index} onClick={() => handleEmojiSelection(emoji)}>
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default EmojiPanel;
