import styles from "./Profile.module.scss";
import { MdPhoneIphone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { MdOutlineInfo } from "react-icons/md";
import { friendsList } from "../../assets/Friends/friendsList";
import { Link } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TiArrowForwardOutline } from "react-icons/ti";
import { HiOutlineEye } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
const Profile = () => {
  const [visible, setVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLSpanElement>(null);
  const [acitve, setActive] = useState(false);
  const [like, SetLike] = useState(2);
  const handleClickLiked = () => {
    setActive(!acitve);
    acitve
      ? SetLike((prev: any) => prev - 1)
      : SetLike((prev: any) => prev + 1);
  };

  const copyText = () => {
    const currentUrl = window.location.href;
    const text = `${currentUrl}`;

    if (copyRef.current) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setVisible(false);
          toast.success(`Cсылка на пост скопировна`);
        })
        .catch((err) => {
          console.error("Ошибка при копировании:", err);
        });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src="image.png" alt="Avatar" className={styles.avatar} />
        <span className={styles.name}>Алиюсуф Хадиев </span>
        <div className={styles.phoneIcon}>
          <MdPhoneIphone />
        </div>
        <div className={styles.info}>
          <span>
            <GrLocation className={styles.icon} /> Москва
          </span>
          <span>
            <MdOutlineInfo className={styles.icon} /> Подробнее
          </span>
        </div>
      </div>
      <Link to={"/friends"}>
        <div className={styles.friends}>
          <span>{friendsList.length} друзей</span>
          <div>
            {friendsList.slice(3, 7).map((el) => (
              <img alt={el.lastname} key={el.id} src={el.img} />
            ))}
          </div>
        </div>
      </Link>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: 120,
        }}
      />
      <div className={styles.posts}>
        <header className={styles.header}>
          <Link to={`/groups/${1}`}>
            <div className={styles.content}>
              <div>
                <img src={"image.png"} alt="" />
              </div>
              <div className={styles.info}>
                <span>{"Алиюсуф Хадиев "}</span>
                <p>{"12:12"}</p>
              </div>
            </div>
          </Link>
          <HiDotsHorizontal
            className={styles.icon}
            onClick={() => setVisible(!visible)}
          />
        </header>
        {visible && (
          <div className={styles.popup} ref={popupRef}>
            <span className={styles.copy} onClick={copyText} ref={copyRef}>
              Скопировать ссылку
            </span>
          </div>
        )}
        <div className={styles.body}>
          <p className={styles.title}>{" Lexus LX 570 ♥"}</p>
          <img
            src={
              "https://i.pinimg.com/564x/08/a4/18/08a418999a88d1548c59f87d42528e83.jpg"
            }
            alt="img"
            className={styles.img}
          />
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.buttons}>
            <span
              onClick={handleClickLiked}
              className={acitve ? styles.layoutLike : styles.layout}
            >
              <IoMdHeartEmpty className={styles.icon} />
              <span>{like}</span>
            </span>
            <span className={styles.layout}>
              <TiArrowForwardOutline className={styles.icon} />
              <span>{2}</span>
            </span>
          </div>
          <div className={styles.view}>
            <HiOutlineEye className={styles.iconView} />
            <span>{98}</span>
          </div>
          <br />
        </div>

        <Toaster
          position="top-center"
          reverseOrder={false}
          containerStyle={{
            top: 120,
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
