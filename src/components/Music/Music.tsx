import styles from "./Music.module.scss";
import { FaPause } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { musicList } from "../../assets/Music/musicList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setCurrentTime,
  setCurrentTrackIndex,
  setIsPause,
  setIsPlaying,
  setSongs,
} from "../../redux/Slices/musicSlice";

type MusicType = {
  image?: string;
  name: string;
  executor: string;
  id: number;
  audio: string;
};
const Music: React.FC = () => {
  const dispatch = useDispatch();
  const { currentTrackIndex, isPlaying, isPause, currentTime, songs } =
    useSelector((state: RootState) => state.music);
  const audioRef = useRef(new Audio());
  const [songDeleteId, setSongDeleteId] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(setSongs(musicList));
  }, [musicList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current.duration) {
        dispatch(setCurrentTime(audioRef.current.currentTime));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      if (currentTrackIndex < songs.length - 1) {
        playTrack(currentTrackIndex + 1);
      } else {
        stopTrack();
      }
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex, songs]);

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
      dispatch(setIsPlaying(false));
      dispatch(setCurrentTrackIndex(index));
    } else {
      if (index !== currentTrackIndex || !isPlaying) {
        audioRef.current.pause();
        audioRef.current.src = songs[index].audio;
        dispatch(setCurrentTrackIndex(index));
        audioRef.current.play();
        dispatch(setIsPlaying(true));
      }
    }
  };
  const pauseTrack = () => {
    audioRef.current.pause();
    dispatch(setIsPlaying(false));
    dispatch(setIsPause(true));
  };

  const stopTrack = () => {
    audioRef.current.pause();
    dispatch(setIsPlaying(false));
    dispatch(setIsPause(false));
    dispatch(setCurrentTime(0));

    audioRef.current.currentTime = 0;
  };

  const handleClickDots = (id: any) => {
    setVisible(true);
    setSongDeleteId(id);
  };

  const closeElement = () => {
    setVisible(false);
  };

  const deleteSong = (id: any) => {
    dispatch(setSongs(songs.filter((el: MusicType) => el.id !== id)));
    setVisible(false);
    setSongDeleteId(null);
    stopTrack();
  };

  return (
    <div className={styles.container}>
      <span className={styles.head}>Треки</span>
      <div className={styles.content}>
        {songs.map((el: MusicType, index: number) => (
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

            <HiDotsHorizontal
              className={styles.icon}
              onClick={() => handleClickDots(el.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
