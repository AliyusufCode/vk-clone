import { Link } from "react-router-dom";
import { groupsList } from "../../assets/Groups/groupsList";
import styles from "./Groups.module.scss";
import { useEffect, useState } from "react";
import ChatSkeleton from "../Skeletons/ChatsSceleton";
type GroupsType = {
  name: string;
  img: string;
  id: number;
  body: string;
};
const Groups = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={styles.container}>
      <span className={styles.countGroups}>
        Все сообщества: <p>{groupsList.length}</p>
      </span>
      {isLoading
        ? [...new Array(11)].map((_, i) => <ChatSkeleton key={i} />)
        : groupsList.map((el: GroupsType) => (
            <div className={styles.groups} key={el.id}>
              <Link to={`/groups/${el.id}`}>
                <div className={styles.groupsContent}>
                  <img src={el.img} alt="img" />
                  <div className={styles.textGroups}>
                    <div className={styles.name}>{el.name}</div>
                    <div className={styles.body}>{el.body}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
    </div>
  );
};

export default Groups;
