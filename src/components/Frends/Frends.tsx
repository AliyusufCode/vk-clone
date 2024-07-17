import styles from "./Frends.module.scss";
import { LiaSearchSolid } from "react-icons/lia";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { friendsList } from "../../assets/Friends/friendsList";
type FriendsType = {
  img: string;
  lastname: string;
  firstname: string;
  id: number;
};
const Friends = () => {
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
          placeholder="Введите имя или фамилию"
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue && (
          <IoMdClose className={styles.clearIcon} onClick={handleClearInput} />
        )}
      </div>
      {friendsList.map((el: FriendsType) => (
        <div className={styles.friends} key={el.id}>
          <div className={styles.friendsTop}>
            <img src={el.img} alt="img" />
            <span>
              {el.lastname} {el.firstname}
            </span>
          </div>
          <LuMessageCircle className={styles.icon} />
        </div>
      ))}
    </div>
  );
};

export default Friends;
