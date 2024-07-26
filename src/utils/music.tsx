import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
  setCurrentTime,
  setCurrentTrackIndex,
  setIsPlaying,
  setIsPause,
  setSongs,
} from "../redux/Slices/musicSlice";
import { RootState } from "../redux/store";

export const useAudioPlayer = (musicList: any) => {
  const dispatch = useDispatch();
  const audioRef = useRef(new Audio());

  const { currentTrackIndex, isPlaying, songs } = useSelector(
    (state: RootState) => state.music
  );

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

  const playTrack = (index: number) => {
    if (index === currentTrackIndex) {
      if (isPlaying) {
        audioRef.current.pause();
        dispatch(setIsPlaying(false));
      } else {
        audioRef.current.play();
        dispatch(setIsPlaying(true));
      }
    } else {
      stopTrack();
      audioRef.current.src = songs[index].audio;
      audioRef.current.currentTime = 0;
      dispatch(setCurrentTrackIndex(index));
      audioRef.current.play();
      dispatch(setIsPlaying(true));
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

  const nextTrack = (index: number) => {
    audioRef.current.src = songs[index + 1].audio;
    dispatch(setCurrentTrackIndex(index + 1));
    audioRef.current.play();
    dispatch(setIsPlaying(true));
  };

  return {
    audioRef,
    playTrack,
    pauseTrack,
    stopTrack,
    nextTrack,
  };
};
