import {
  recommendedGruop,
  servicesList,
} from "../../assets/Services/servicesList";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Services.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ServicesSkeleton from "../Skeletons/ServicesSkeleton";
import ServicesGroup, { ServicesGroupTitle } from "../Skeletons/ServicesGroup";
type ServicesType = {
  title: string;
  icon: any;
  link: string;
  color: string;
  id: number;
};
const Services = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.services}>
        {servicesList.map((el: ServicesType) => (
          <Link to={el.link} key={el.id}>
            {isLoading ? (
              [...new Array(1)].map((_, i) => (
                <span className={styles.layoutServices}>
                  <div className="servicesSkeleton">
                    <ServicesSkeleton key={i} />
                  </div>
                </span>
              ))
            ) : (
              <span className={styles.layoutServices}>
                <el.icon className={styles.icon} color={el.color} />
                <p>{el.title}</p>
              </span>
            )}
          </Link>
        ))}
      </div>
      <div className={styles.recommend}>
        <span className={styles.span}>
          {isLoading ? <ServicesGroupTitle /> : "Для вас"}
        </span>
        <Swiper
          slidesPerView={5.2}
          centeredSlides={false}
          spaceBetween={10}
          className={styles.contentRecommend}
        >
          {recommendedGruop.map((el) => (
            <SwiperSlide key={el.id}>
              <div className={styles.container}>
                <Link style={{ color: "white" }} to={`/groups/${el.id}`}>
                  <div className={styles.cart}>
                    {isLoading ? (
                      [...new Array(1)].map((_, i) => (
                        <span className={styles.layoutServices}>
                          <div>
                            <ServicesGroup key={i} />
                          </div>
                        </span>
                      ))
                    ) : (
                      <>
                        <img src={el.image} alt="img" className={styles.img} />
                        <div className={styles.content}>
                          <p className={styles.title}>
                            {el.title.length > 7
                              ? `${el.title.slice(0, 6)}..`
                              : el.title}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
