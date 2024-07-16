import { useState, useEffect } from "react";
import { historySlide } from "../../assets/historyList";
import Slide from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./History.module.scss";

import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(7.2);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 520);
      setSlidesPerView(window.innerWidth > 520 ? 5.5 : 6.2);
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
          spaceBetween={50}
          navigation={isWideScreen}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className={styles.addHistory}>
            <Slide
              img={"/addHistory.png"}
              prev={"image.png"}
              title={"История"}
              className="addHistory"
            />
          </SwiperSlide>
          {historySlide.map((el) => (
            <SwiperSlide key={el.img}>
              <Slide img={el.img} prev={el.prev} title={el.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
