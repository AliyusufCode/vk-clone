import { Link } from "react-router-dom";
import { category, categoryList, list } from "../../assets/sidebarList";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      {categoryList.map((el) => (
        <div key={el.link} className={styles.content}>
          <Link to={el.link} className={styles.link}>
            <el.icon className={styles.icon} />
            <p>{el.title}</p>
          </Link>
        </div>
      ))}
      <div className={styles.line} />
      {category.map((el) => (
        <div className={styles.content}>
          <Link to={el.link} className={styles.link}>
            {el.icon && <el.icon key={el.link} className={styles.icon} />}
            <p>{el.title}</p>
          </Link>
        </div>
      ))}
      <div className={styles.line} />
      {list.map((el) => (
        <div className={styles.content}>
          <Link to={el.link} className={styles.link}>
            {el.icon && <el.icon key={el.link} className={styles.icon} />}
            <p>{el.title}</p>
          </Link>
        </div>
      ))}
      <span>Здесь могла бы быть ваша реклама</span>
    </div>
  );
};

export default Sidebar;
