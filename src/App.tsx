import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeaderMobile from "./components/Header/HeaderMobile";
import Home from "./components/Home/Home";
import InterestingNews from "./components/InterestingNews/InterestingNews";
import MenuNavigate from "./components/MenuNavigate/MenuNavigate";
import Sidebar from "./components/Sidebar/Sidebar";
import Services from "./components/Services/Services";
import Chats from "./components/Chats/Chats";
import Notifications from "./components/Notifications/Notifications";
import Me from "./components/Me/Me";
import Friends from "./components/Frends/Friends";
import Groups from "./components/Groups/Groups";
import Empty from "./components/Empty/Empty";
import Music from "./components/Music/Music";
import Photos from "./components/Photos/Photos";
import Market from "./components/Market/Market";
import OpenedChat from "./components/OpenedChat/OpenedChat";
import InputChat from "./components/InputChat/InputChat";
import { OpenedGroup } from "./components/OpenedGroup/OpenedGroup";
import OpenedPhoto from "./components/OpenedPhoto/OpenedPhoto";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect, useState } from "react";
import { setCurrentTime, setSongs } from "./redux/Slices/musicSlice";
import { musicList } from "./assets/Music/musicList";
import MusicActive from "./components/MusicActive/MusicActive";
import { useAudioPlayer } from "./utils/music";
import PostComments from "./components/PostComments/PostComments";
import Profile from "./components/Profile/Profile";
type MusicType = {
  image?: string;
  name: string;
  executor: string;
  id: number;
  audio: string;
};
function App() {
  const location = useLocation();
  const path = location.pathname;
  const currentTrack = useSelector(
    (state: RootState) => state.music.currentTrack
  );

  const dispatch = useDispatch();
  const { currentTrackIndex, isPlaying, currentTime, songs, isPause } =
    useSelector((state: RootState) => state.music);
  const [songDeleteId, setSongDeleteId] = useState(null);
  const [visible, setVisible] = useState(false);

  const { playTrack, pauseTrack, stopTrack, audioRef, nextTrack } =
    useAudioPlayer(musicList);

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
    <div>
      <Header />
      <HeaderMobile />
      <div
        className="app"
        style={{
          marginBottom: path.startsWith("/im/")
            ? "60px"
            : currentTrack
            ? "90px"
            : "60px",
        }}
      >
        <Sidebar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <div className="left-sidebar">
                    <MenuNavigate />
                    <InterestingNews />
                  </div>
                </>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/im" element={<Chats />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/me" element={<Me />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/clip" element={<Empty />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/audio"
              element={
                <Music
                  songs={songs}
                  visible={visible}
                  deleteSong={deleteSong}
                  songDeleteId={songDeleteId}
                  closeElement={closeElement}
                  isPlaying={isPlaying}
                  currentTrackIndex={currentTrackIndex}
                  pauseTrack={pauseTrack}
                  playTrack={playTrack}
                  isPause={isPause}
                  audioRef={audioRef}
                  formatTime={formatTime}
                  handleClickDots={handleClickDots}
                  currentTime={currentTime}
                />
              }
            />
            <Route path="/games" element={<Empty />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/market" element={<Market />} />
            <Route path="/help" element={<Empty />} />
            <Route path="/steps" element={<Empty />} />
            <Route path="/acquaintance" element={<Empty />} />
            <Route path="/im/:id" element={<OpenedChat />} />
            <Route path="/groups/:id" element={<OpenedGroup />} />
            <Route path="/image/:id" element={<OpenedPhoto />} />
            {<Route path="/post-comments" element={<PostComments />} />}
          </Routes>
        </div>
      </div>
      {path.startsWith("/im/") ? (
        <InputChat />
      ) : path.startsWith("/image/") ? null : (
        <div className="footer">
          <Footer />
          {currentTrack && (
            <div className="musicContainer">
              {currentTrack && (
                <MusicActive
                  isPause={isPause}
                  isPlaying={isPlaying}
                  currentTrack={currentTrack}
                  currentTrackIndex={currentTrackIndex}
                  pauseTrack={pauseTrack}
                  playTrack={playTrack}
                  stopTrack={stopTrack}
                  nextTrack={nextTrack}
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
