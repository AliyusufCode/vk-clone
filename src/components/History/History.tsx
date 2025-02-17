import { useState, useEffect } from "react";
import { historySlide } from "../../assets/historyList";
import Slide from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./History.module.scss";

import { Pagination, Navigation } from "swiper/modules";
import HistorySkeleton from "../Skeletons/HistorySkeleton";

export default function App() {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(7.2);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 520);
      setSlidesPerView(window.innerWidth > 520 ? 6.5 : 7.5);
      setSlidesPerView(window.innerWidth < 420 ? 5.5 : 5.5);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <h3>Истории</h3>
          <p>Настройки</p>
        </div>
        <Swiper
          slidesPerView={slidesPerView}
          centeredSlides={false}
          spaceBetween={window.innerWidth < 420 ? 40 : 50}
          navigation={isWideScreen}
          modules={[Pagination, Navigation]}
        >
          {historySlide.map((el) => (
            <SwiperSlide key={el.id}>
              {isLoading ? (
                [...new Array(1)].map((_, i) => (
                  <div className="historySkeleton">
                    <HistorySkeleton key={i} />
                  </div>
                ))
              ) : (
                <Slide img={el.img} prev={el.prev} title={el.title} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
