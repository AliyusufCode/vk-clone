import { historySlide } from "../../assets/historyList";
import Slide from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./History.module.scss";

import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <h3>Истории</h3>
          <p>Настройки</p>
        </div>
        <Swiper
          slidesPerView={7.2}
          centeredSlides={false}
          spaceBetween={30}
          navigation={true}
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
