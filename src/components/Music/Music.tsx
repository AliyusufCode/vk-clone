import { HiDotsHorizontal } from "react-icons/hi";
import styles from "./Music.module.scss";
import React from "react";
import { musicList } from "../../assets/Music/musicList";
type MusicType = {
  image?: string;
  name: string;
  executor: string;
  id: number;
};
console.log(musicList);
const Music: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.head}>Треки</span>
      <div className={styles.content}>
        {musicList.map((el: MusicType) => (
          <div className={styles.music} key={el.id}>
            <span className={styles.layout}>
              <img
                src={
                  el.image !== undefined
                    ? el.image
                    : "https://i.pinimg.com/564x/c1/7d/28/c17d2836efef2a8d4395c8a27f37e45d.jpg"
                }
                alt="img"
                className={styles.img}
              />
              <div className={styles.infoMusic}>
                <span style={{ color: "white" }}>{el.name}</span>
                <span style={{ color: "gray" }}>{el.executor}</span>
              </div>
            </span>
            <HiDotsHorizontal className={styles.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
