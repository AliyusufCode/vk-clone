import styles from "./Notifications.module.scss";
const Notifications = () => {
  return (
    <div className={styles.container}>
      <span className={styles.head}>Последние</span>
      <div className={styles.notification}>
        <img
          src="https://i.pinimg.com/564x/37/b0/92/37b092f59895ec38d50dfca91e053938.jpg"
          alt="img"
        />
        <div className={styles.infoNotification}>
          <span className={styles.name}>
            <span>Юрий Павлов</span> принял вашу заявку в друзья
          </span>
          <button>Отправить сообщение</button>
        </div>
      </div>
      <div className={styles.notification}>
        <img
          src="https://i.pinimg.com/564x/71/dc/a8/71dca8998e70d530b029ee8dde846e19.jpg"
          alt="img"
        />
        <div className={styles.infoNotification}>
          <span className={styles.name}>
            <span>Андрей Высоцкий</span> принял вашу заявку в друзья
          </span>
          <button>Отправить сообщение</button>
        </div>
      </div>
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
    </div>
  );
};

export default Notifications;
