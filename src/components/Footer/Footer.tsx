import { useEffect, useState } from "react";
import { footerList } from "../../assets/Footer/footerList";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
type PropsFooter = {
  title: string;
  link: string;
  icon: any;
  id: number;
};

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;
  const [active, setActive] = useState(path);
  useEffect(() => {
    setActive(path);
  }, [path]);
  return (
    <div className={styles.container}>
      {footerList.map((el: PropsFooter) => (
        <div
          className={styles.content}
          key={el.id}
          onClick={() => setActive(path)}
        >
          <Link to={el.link}>
            <div>
              <el.icon
                className={el.link === active ? styles.iconActive : styles.icon}
              />
              <p
                className={
                  el.link === active ? styles.titleActive : styles.title
                }
              >
                {el.title}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Footer;
