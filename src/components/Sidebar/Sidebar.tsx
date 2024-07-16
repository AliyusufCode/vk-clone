import { category, categoryList, list } from "../../assets/sidebarList";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      {categoryList.map((el) => (
        <div className={styles.content} key={el.link}>
          <el.icon className={styles.icon} />
          <p>{el.title}</p>
        </div>
      ))}
      <div className={styles.line} />
      {category.map((el) => (
        <div className={styles.content}>
          {el.icon && <el.icon key={el.link} className={styles.icon} />}
          <p>{el.title}</p>
        </div>
      ))}
      <div className={styles.line} />
      {list.map((el) => (
        <div className={styles.content}>
          {el.icon && <el.icon key={el.link} className={styles.icon} />}
          <p>{el.title}</p>
        </div>
      ))}
      <span>Здесь могла бы быть ваша реклама</span>
    </div>
  );
};

export default Sidebar;
