import { useSelector } from "react-redux";
import { posts } from "../../assets/Posts/posts";
import styles from "./PostComments.module.scss";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { HiDotsHorizontal } from "react-icons/hi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { HiOutlineEye } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { MdSend } from "react-icons/md";
const PostComments = () => {
  const postId = useSelector((state: RootState) => state.post.postId);
  const findPost = posts.find((el) => el.id === postId);
  const [visible, setVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const closeElement = () => {
    setVisible(false);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      closeElement();
    }
  };
  useEffect(() => {
    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);
  const copyRef = useRef<HTMLSpanElement>(null);
  const copyText = () => {
    const currentUrl = window.location.href;
    const text = `${currentUrl}groups/${findPost?.groupId}`;

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
  const [acitve, setActive] = useState(false);
  const [like, SetLike] = useState(findPost?.likes);
  useEffect(() => {
    SetLike(findPost?.likes);
  }, []);
  const handleClickLiked = () => {
    setActive(!acitve);
    acitve
      ? SetLike((prev: any) => prev - 1)
      : SetLike((prev: any) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={`/groups/${findPost?.groupId}`}>
          <div className={styles.content}>
            <div>
              <img src={findPost?.publishedImage} alt="" />
            </div>
            <div className={styles.info}>
              <span>{findPost?.publishedName}</span>
              <p>{findPost?.timePublished}</p>
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
        <p className={styles.title}>{findPost?.body}</p>
        <img src={findPost?.image} alt="img" className={styles.img} />
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
            <span>{findPost?.redirected}</span>
          </span>
        </div>
        <div className={styles.view}>
          <HiOutlineEye className={styles.iconView} />
          <span>{findPost?.views}K</span>
        </div>
        <br />
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.line} />
        {findPost?.comments.map((el) => (
          <div key={el.id} className={styles.comments}>
            <div className={styles.block}>
              <div>
                <img src={el.img} alt="img" />
              </div>
              <div className={styles.info}>
                <span>{el.user}</span>
                <p>{el.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: 120,
        }}
      />
      <div className={styles.addComment}>
        <img
          src={findPost?.publishedImage}
          alt=""
          className={styles.addedImage}
        />
        <input type="text" placeholder="Написать комментарий..." />
        <MdSend className={styles.sendIcon} />
      </div>
    </div>
  );
};

export default PostComments;
