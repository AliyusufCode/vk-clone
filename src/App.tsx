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
import Friends from "./components/Frends/Frends";
import Groups from "./components/Groups/Groups";
import Empty from "./components/Empty/Empty";
import Music from "./components/Music/Music";
import Photos from "./components/Photos/Photos";
import Market from "./components/Market/Market";
import OpenedChat from "./components/OpenedChat/OpenedChat";
import InputChat from "./components/InputChat/InputChat";
import { OpenedGroup } from "./components/OpenedGroup/OpenedGroup";
import OpenedPhoto from "./components/OpenedPhoto/OpenedPhoto";

function App() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div>
      <Header />
      <HeaderMobile />
      <div className="app">
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
            <Route path="/audio" element={<Music />} />
            <Route path="/games" element={<Empty />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/market" element={<Market />} />
            <Route path="/help" element={<Empty />} />
            <Route path="/steps" element={<Empty />} />
            <Route path="/acquaintance" element={<Empty />} />
            <Route path="/im/:id" element={<OpenedChat />} />
            <Route path="/groups/:id" element={<OpenedGroup />} />
            <Route path="/image/:id" element={<OpenedPhoto />} />
          </Routes>
        </div>
      </div>
      {path.startsWith("/im/") ? (
        <InputChat />
      ) : path.startsWith("/image/") ? null : (
        <Footer />
      )}
    </div>
  );
}

export default App;
