import styles from "./Friends.module.scss";
import { LiaSearchSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { friendsList } from "../../assets/Friends/friendsList";
import { Link } from "react-router-dom";
import InputSkeleton from "../Skeletons/InputSkeleton";
import FriedsSkeleton, {
  FriedsSkeletonIcon,
} from "../Skeletons/FriendsSkeleton";
type FriendsType = {
  img: string;
  lastname: string;
  firstname: string;
  id: number;
};
const Friends = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.contentInput}>
        <LiaSearchSolid className={styles.searchIcon} />
        {isLoading ? (
          [...new Array(1)].map((_, i) => <InputSkeleton key={i} />)
        ) : (
          <input
            type="text"
            placeholder="Введите имя или фамилию"
            value={inputValue}
            onChange={handleInputChange}
          />
        )}
        {inputValue && (
          <IoMdClose className={styles.clearIcon} onClick={handleClearInput} />
        )}
      </div>
      {friendsList
        .filter((el) => {
          if (
            el.lastname.toLowerCase().includes(inputValue.toLowerCase()) ||
            el.firstname.toLowerCase().includes(inputValue.toLowerCase())
          ) {
            return true;
          } else false;
        })
        .map((el: FriendsType) => (
          <div className={styles.friends} key={el.id}>
            <div className={styles.friendsTop}>
              {isLoading ? <FriedsSkeleton /> : <img src={el.img} alt="img" />}
              {!isLoading && (
                <span>
                  {el.lastname} {el.firstname}
                </span>
              )}
            </div>
            <Link to={`/im/${el.id}`}>
              {isLoading ? (
                <FriedsSkeletonIcon />
              ) : (
                <LuMessageCircle className={styles.icon} />
              )}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Friends;
