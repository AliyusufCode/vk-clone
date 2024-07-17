import {
  recommendedGruop,
  servicesList,
} from "../../assets/Services/servicesList";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Services.module.scss";
type ServicesType = {
  title: string;
  icon: any;
  link: string;
  color: string;
  id: number;
};
const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.services}>
        {servicesList.map((el: ServicesType) => (
          <span className={styles.layoutServices}>
            <el.icon className={styles.icon} color={el.color} />
            <p>{el.title}</p>
          </span>
        ))}
      </div>
      <div className={styles.recommend}>
        <span className={styles.span}>Для вас</span>
        <Swiper
          slidesPerView={6.2}
          centeredSlides={false}
          spaceBetween={10}
          className={styles.contentRecommend}
        >
          {recommendedGruop.map((el) => (
            <SwiperSlide key={el.id}>
              <div className={styles.container}>
                <div className={styles.cart}>
                  <img src={el.image} alt="img" className={styles.img} />
                  <div className={styles.content}>
                    <p className={styles.title}>
                      {el.title.length > 7
                        ? `${el.title.slice(0, 6)}..`
                        : el.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
