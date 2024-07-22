import styles from "./InputChat.module.scss";
import { MdKeyboardVoice } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
import { useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
const InputChat = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <input
          type="text"
          placeholder="Сообщение"
          value={inputValue}
          onChange={handleInputChange}
        />
        <>
          <GoSmiley className={styles.icon} />
          {inputValue ? (
            <FaCircleArrowUp
              className={styles.icon}
              onClick={handleClearInput}
            />
          ) : (
            <MdKeyboardVoice className={styles.icon} />
          )}
        </>
      </div>
    </div>
  );
};

export default InputChat;
