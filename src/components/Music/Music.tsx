import styles from "./Music.module.scss";
import { FaPause } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { musicList } from "../../assets/Music/musicList";

type MusicType = {
  image?: string;
  name: string;
  executor: string;
  id: number;
  audio: string;
};

const Music: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(Number);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const audioRef = useRef(new Audio());
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current.duration) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };

  const playTrack = (index: number) => {
    if (index === currentTrackIndex && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentTrackIndex(index);
    } else {
      if (index !== currentTrackIndex || !isPlaying) {
        audioRef.current.src = musicList[index].audio;
        setCurrentTrackIndex(index);
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };
  const pauseTrack = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    setIsPause(true);
  };

  return (
    <div className={styles.container}>
      <span className={styles.head}>Треки</span>
      <div className={styles.content}>
        {musicList.map((el: MusicType, index: number) => (
          <div className={styles.music} key={el.id}>
            <span
              className={styles.layout}
              onClick={
                isPlaying && currentTrackIndex === index
                  ? () => pauseTrack()
                  : () => playTrack(index)
              }
            >
              <img
                src={
                  el.image ||
                  "https://i.pinimg.com/564x/c1/7d/28/c17d2836efef2a8d4395c8a27f37e45d.jpg"
                }
                alt="img"
                className={styles.img}
              />
              {currentTrackIndex === index && isPlaying ? (
                <FaPause onClick={() => pauseTrack()} className={styles.play} />
              ) : (
                currentTrackIndex === index &&
                isPause && (
                  <FaPlay
                    className={styles.play}
                    onClick={() => playTrack(index)}
                  />
                )
              )}

              <div className={styles.infoMusic}>
                <span style={{ color: "white" }}>
                  {el.name}
                  {currentTrackIndex === index && isPlaying && (
                    <span style={{ color: "gray", marginLeft: 10 }}>
                      {el.executor.slice(0, 10)}...
                    </span>
                  )}
                </span>
                {currentTrackIndex === index && isPlaying ? (
                  <div className={styles.contentInput}>
                    <input
                      type="range"
                      className={styles.input}
                      value={
                        (audioRef.current.currentTime /
                          audioRef.current.duration) *
                          100 || 0
                      }
                      onChange={(e: any) => {
                        const time =
                          (e.target.value * audioRef.current.duration) / 100;
                        audioRef.current.currentTime = time;
                      }}
                    />
                    <span className={styles.currentTime}>
                      {formatTime(currentTime)}
                    </span>
                  </div>
                ) : (
                  <span style={{ color: "gray" }}>{el.executor}</span>
                )}
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
