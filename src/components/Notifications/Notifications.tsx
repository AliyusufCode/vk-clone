import { Link } from "react-router-dom";
import styles from "./Notifications.module.scss";
import NotificationsSkeleton, {
  NotificationsSkeletonTitle,
} from "../Skeletons/NotificationsSkeleton";
import { useEffect, useState } from "react";
const Notifications = () => {
  const listNotifications = [
    {
      img: "https://i.pinimg.com/564x/37/b0/92/37b092f59895ec38d50dfca91e053938.jpg",
      name: "Юрий Павлов",
      id: 1,
      userId: 3222,
    },
    {
      img: "https://i.pinimg.com/564x/71/dc/a8/71dca8998e70d530b029ee8dde846e19.jpg",
      name: "Андрей Высоцкий",
      id: 2,
      userId: 5,
    },
  ];
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
      <span className={styles.head}>
        {isLoading ? <NotificationsSkeletonTitle /> : "Последние"}
      </span>
      {isLoading
        ? [...new Array(4)].map((_, i) => (
            <div className="notificationsSkeleton">
              <NotificationsSkeleton key={i} />
            </div>
          ))
        : listNotifications.map(
            (el: { img: string; id: number; name: string; userId: number }) => (
              <div className={styles.notification} key={el.id}>
                <img src={el.img} alt="img" />
                <div className={styles.infoNotification}>
                  <span className={styles.name}>
                    <span>{el.name}</span> принял вашу заявку в друзья
                  </span>
                  <Link to={`/im/${el.userId}`}>
                    <button>Отправить сообщение</button>
                  </Link>
                </div>
              </div>
            )
          )}
      {!isLoading && (
        <div className={styles.notification}>
          <img
            src="https://i.pinimg.com/564x/34/0c/8d/340c8d2802cc8529f266d88f8035fa78.jpg"
            alt="img"
          />
          <div className={styles.infoNotification}>
            <span className={styles.name}>
              <p> Новый рекомендованный друг </p>
              Возможно, вы знакомы с <span> Паркером</span>
            </span>
            <button>Добавить в друзья</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
