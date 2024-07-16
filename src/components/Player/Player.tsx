import { useState } from "react";
import styles from "./Player.module.scss";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
const Player = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className={styles.player}>
      <TbPlayerSkipBackFilled className={styles.icon} />
      {play ? (
        <TbPlayerPauseFilled
          className={styles.icon}
          onClick={() => setPlay(false)}
        />
      ) : (
        <TbPlayerPlayFilled
          className={styles.icon}
          onClick={() => setPlay(true)}
        />
      )}
      <TbPlayerSkipForwardFilled className={styles.icon} />
      <span>Desireless — Voyage Voyage</span>
    </div>
  );
};

export default Player;
