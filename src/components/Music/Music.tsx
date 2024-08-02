import styles from "./Music.module.scss";
import { FaPause } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import {
  MusicSkeletonDots,
  MusicSkeletonExecutor,
  MusicSkeletonImage,
  MusicSkeletonTitle,
} from "../Skeletons/MusicSkeleton";

type MusicType = {
  image?: string;
  name: string;
  executor: string;
  id: number;
  audio: string;
};

export type MusicProps = {
  songs: MusicType[];
  visible: boolean;
  deleteSong: (id: number | null) => void;
  songDeleteId: null | number;
  closeElement: () => void;
  isPlaying: boolean;
  currentTrackIndex: number;
  pauseTrack: () => void;
  playTrack: (id: number) => void;
  isPause: boolean;
  audioRef: React.RefObject<HTMLAudioElement> | null | any;
  formatTime: (time: number) => string;
  handleClickDots: (id: number) => void;
  currentTime: number;
  currentTrack?: any;
};
const Music = ({
  songs,
  visible,
  deleteSong,
  songDeleteId,
  closeElement,
  isPlaying,
  currentTrackIndex,
  pauseTrack,
  playTrack,
  isPause,
  audioRef,
  formatTime,
  handleClickDots,
  currentTime,
}: MusicProps) => {
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
      <span className={styles.head}>Треки</span>
      <div className={styles.content}>
        {songs.map((el: any, index: number) => (
          <div className={styles.music} key={el.id}>
            {visible && (
              <div className={styles.overlay}>
                <div className={styles.voice}>
                  <span
                    className={styles.del}
                    onClick={() => deleteSong(songDeleteId)}
                  >
                    Удалить аудиозапись
                  </span>
                  <span className={styles.back} onClick={closeElement}>
                    Отмена
                  </span>
                </div>
              </div>
            )}
            <span
              className={styles.layout}
              onClick={
                isPlaying && currentTrackIndex === index
                  ? () => pauseTrack()
                  : () => playTrack(index)
              }
            >
              {isLoading ? (
                <MusicSkeletonImage />
              ) : (
                <img
                  src={
                    el.image ||
                    "https://i.pinimg.com/564x/c1/7d/28/c17d2836efef2a8d4395c8a27f37e45d.jpg"
                  }
                  alt="img"
                  className={styles.img}
                />
              )}
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
                  {isLoading ? <MusicSkeletonTitle /> : el.name}
                  {currentTrackIndex === index && isPlaying && (
                    <span style={{ color: "gray", marginLeft: 10 }}>
                      {el.executor.slice(0, 10)}
                      ...
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
                  <span style={{ color: "gray" }}>
                    {isLoading ? <MusicSkeletonExecutor /> : el.executor}
                  </span>
                )}
              </div>
            </span>

            {isLoading ? (
              <MusicSkeletonDots />
            ) : (
              <HiDotsHorizontal
                className={styles.icon}
                onClick={() => handleClickDots(el.id)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
