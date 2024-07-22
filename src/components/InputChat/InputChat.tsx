import styles from "./InputChat.module.scss";
import { MdKeyboardVoice } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
import { useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addMessage } from "../../redux/Slices/chatSlice";
const InputChat = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };
  const handleSendMessage = () => {
    dispatch(
      addMessage({
        text: inputValue,
        time: getCurrentTime(),
        isMyMessage: true,
      })
    );
    setTimeout(() => {
      dispatch(
        addMessage({
          text: inputValue,
          time: getCurrentTime(),
          isMyMessage: false,
        })
      );
    }, 1000);

    setInputValue("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <>
          <FiPlusCircle className={styles.iconPlus} />
          <input
            type="text"
            placeholder="Ваше сообщение"
            value={inputValue}
            onChange={handleInputChange}
          />
        </>
        <>
          <GoSmiley className={styles.icon} />
          {inputValue ? (
            <FaCircleArrowUp
              className={styles.icon}
              onClick={handleSendMessage}
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
