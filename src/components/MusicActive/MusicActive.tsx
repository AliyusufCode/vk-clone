import styles from "./MusicActive.module.scss";
import { FaPause } from "react-icons/fa6";
import { IoIosPlay } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setCurrentTrackIndex } from "../../redux/Slices/musicSlice";

const MusicActive = ({
  isPlaying,
  currentTrack,
  currentTrackIndex,
  pauseTrack,
  playTrack,
  stopTrack,
  nextTrack,
}: any) => {
  const dispatch = useDispatch();
  const stop = () => {
    dispatch(setCurrentTrackIndex(-1));
    stopTrack();
  };
  return (
    <div className={styles.container}>
      {isPlaying ? (
        <FaPause className={styles.icon} onClick={() => pauseTrack()} />
      ) : (
        <IoIosPlay
          className={styles.icon}
          onClick={() => playTrack(currentTrackIndex)}
        />
      )}
      <div>
        <span>{currentTrack?.name}</span>
        <p>{currentTrack?.executor}</p>
      </div>
      {isPlaying ? (
        <TbPlayerTrackNextFilled
          className={styles.icon}
          onClick={() => nextTrack(currentTrackIndex)}
        />
      ) : (
        <IoMdClose className={styles.icon} onClick={() => stop()} />
      )}
    </div>
  );
};

export default MusicActive;
