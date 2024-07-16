import styles from "./Search.module.scss";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <span className={styles.icon}>
        <GoSearch />
      </span>
      <input type="text" placeholder="Поиск" className={styles.input} />
    </div>
  );
};

export default Search;
