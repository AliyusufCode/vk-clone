import { useState } from "react";
import styles from "./MenuNavigate.module.scss";
type ListType = {
  title: string;
  link?: string;
  id: number;
  open?: boolean;
};
const MenuNavigate = () => {
  const list = [
    { title: "Новости", link: "/", id: 1 },
    { title: "Рекомендации", link: "/recommended", id: 2 },
    { title: "Поиск", open: false, id: 3 },
    { title: "Реакции", id: 4 },
    { title: "Обновления", id: 5 },
    { title: "Коментарии", id: 6 },
  ];
  const [active, setActive] = useState(1);
  return (
    <div className={styles.container}>
      {list.map((el: ListType) => {
        return (
          <div key={el.id}>
            <p
              onClick={() => setActive(el.id)}
              className={el.id === active ? styles.titleActive : styles.title}
            >
              {el.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MenuNavigate;
