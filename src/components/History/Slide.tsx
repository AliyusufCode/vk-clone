import styles from "./Slide.module.scss";
const Slide = ({ prev, img, title }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <img src={prev} alt="img" className={styles.bgImg} />
        <div className={styles.content}>
          <img
            src={img}
            alt="img"
            className={title === "История" ? styles.addHistory : styles.img}
          />
          <p
            className={
              title === "История" ? styles.addHistoryTitle : styles.title
            }
          >
            {title.length > 7 ? `${title.slice(0, 8)}...` : title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
