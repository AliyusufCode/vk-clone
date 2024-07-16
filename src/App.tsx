import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeaderMobile from "./components/Header/HeaderMobile";
import Home from "./components/Home/Home";
import InterestingNews from "./components/InterestingNews/InterestingNews";
import MenuNavigate from "./components/MenuNavigate/MenuNavigate";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div>
      <Header />
      <HeaderMobile />
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
      <Footer />
    </div>
  );
}

export default App;
