import "./App.css";
import Header from "./components/Header/Header";
import HeaderMobile from "./components/Header/HeaderMobile";
import Home from "./components/Home/Home";
import InterestingNews from "./components/InterestingNews/InterestingNews";
import MenuNavigate from "./components/MenuNavigate/MenuNavigate";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div>
      {/* <Header />
      <HeaderMobile /> */}
      <div className="app">
        <Sidebar />
        <div className="content">
          <Home />
          <div className="left-sidebar">
            <MenuNavigate />
            <InterestingNews />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
