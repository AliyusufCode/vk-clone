import { groupsList } from "../../assets/Groups/groupsList";
import styles from "./Groups.module.scss";
type GroupsType = {
  name: string;
  img: string;
  id: number;
  body: string;
};
const Groups = () => {
  return (
    <div className={styles.container}>
      <span className={styles.countGroups}>
        Все сообщества: <p>{groupsList.length}</p>
      </span>
      {groupsList.map((el: GroupsType) => (
        <div className={styles.groups} key={el.id}>
          <div className={styles.groupsContent}>
            <img src={el.img} alt="img" />
            <div className={styles.textGroups}>
              <div className={styles.name}>{el.name}</div>
              <div className={styles.body}>{el.body}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Groups;
