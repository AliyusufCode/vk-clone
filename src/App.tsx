import { Route, Routes } from "react-router";
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

function App() {
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
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
