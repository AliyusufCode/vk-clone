// import { HiDotsHorizontal } from "react-icons/hi";
import styles from "./Music.module.scss";
import { FaPause } from "react-icons/fa6";
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { musicList } from "../../assets/Music/musicList";
type MusicType = {
  image?: string;
  name: string;
  executor: string;
  id: number;
};
const Music: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const playTrack = (index: number) => {
    if (index === currentTrackIndex && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (index !== currentTrackIndex) {
        audioRef.current.src = musicList[index].audio;
        setCurrentTrackIndex(index);
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseTrack = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className={styles.container}>
      <span className={styles.head}>Треки</span>
      <div className={styles.content}>
        {musicList.map((el: MusicType, index: number) => (
          <div className={styles.music} key={el.id}>
            <span className={styles.layout}>
              <img
                src={
                  el.image ||
                  "https://i.pinimg.com/564x/c1/7d/28/c17d2836efef2a8d4395c8a27f37e45d.jpg"
                }
                alt="img"
                className={styles.img}
              />
              {currentTrackIndex === index && isPlaying ? (
                <FaPlay onClick={() => pauseTrack()} className={styles.play} />
              ) : (
                <FaPause
                  onClick={() => playTrack(index)}
                  className={styles.play}
                />
              )}

              <div className={styles.infoMusic}>
                <span style={{ color: "white" }}>
                  {el.name}
                  {currentTrackIndex === index && isPlaying && (
                    <span style={{ color: "gray" }}>
                      {el.executor.slice(0, 10)}
                    </span>
                  )}
                </span>
                {currentTrackIndex === index && isPlaying ? (
                  <input
                    type="range"
                    value={
                      (audioRef.current.currentTime /
                        audioRef.current.duration) *
                        100 || 0
                    }
                    onChange={(e) => {
                      const time =
                        (e.target.value * audioRef.current.duration) / 100;
                      audioRef.current.currentTime = time;
                    }}
                  />
                ) : (
                  <span style={{ color: "gray" }}>{el.executor}</span>
                )}
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
