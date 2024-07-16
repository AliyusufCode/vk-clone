import { useState } from "react";
import { footerList } from "../../assets/Footer/footerList";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.container}>
      {footerList.map((el: any, i) => (
        <div className={styles.content} key={el.link}>
          <el.icon className={i === active ? styles.iconActive : styles.icon} />
          <p
            onClick={() => setActive(i)}
            className={i === active ? styles.titleActive : styles.title}
          >
            {el.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
