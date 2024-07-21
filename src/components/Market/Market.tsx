import { marketList } from "../../assets/Market/marketList";
import styles from "./Market.module.scss";
type MarketList = {
  price: number;
  body: string;
  image: string;
  previousPrice?: number;
  id: number;
};
const Market = () => {
  return (
    <div className={styles.container}>
      <span className={styles.head}>Может заинтересовать</span>
      <div className={styles.recommend}>
        {marketList.map((el: MarketList) => (
          <div className={styles.layout} key={el.id}>
            <img src={el.image} alt="img" />
            <div className={styles.footerLayout}>
              <div>
                <span>{el.price} ₽.</span>
                {el.previousPrice && (
                  <del className={styles.sale}>{el.previousPrice} ₽.</del>
                )}
              </div>
              <p>
                {el.body.length > 20 ? `${el.body.slice(0, 20)}...` : el.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
