import { useDispatch, useSelector } from "react-redux";
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
import { setPost } from "../../redux/Slices/postSlice";
const PostComments = () => {
  const [visible, setVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const { post, postId } = useSelector((state: RootState) => state.post);
  const findPost = posts.find((el) => el.id === postId);
  const copyRef = useRef<HTMLSpanElement>(null);
  const [acitve, setActive] = useState(false);
  const [like, SetLike] = useState(findPost?.likes);
  const dispatch = useDispatch();

  useEffect(() => {
    SetLike(post?.likes);
    dispatch(setPost(findPost));
  }, []);

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
  const copyText = () => {
    const currentUrl = window.location.href;
    const text = `${currentUrl}groups/${post?.groupId}`;

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

  const handleClickLiked = () => {
    setActive(!acitve);
    acitve
      ? SetLike((prev: any) => prev - 1)
      : SetLike((prev: any) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={`/groups/${post?.groupId}`}>
          <div className={styles.content}>
            <div>
              <img src={post?.publishedImage} alt="" />
            </div>
            <div className={styles.info}>
              <span>{post?.publishedName}</span>
              <p>{post?.timePublished}</p>
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
        <p className={styles.title}>{post?.body}</p>
        <img src={post?.image} alt="img" className={styles.img} />
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
            <span>{post?.redirected}</span>
          </span>
        </div>
        <div className={styles.view}>
          <HiOutlineEye className={styles.iconView} />
          <span>{post?.views}K</span>
        </div>
        <br />
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.line} />
        {post.comments &&
          post?.comments.map((el) => (
            <div key={el.id} className={styles.comments}>
              <div className={styles.block}>
                <div>
                  <img src={el.img} alt="img" />
                </div>
                <div className={styles.info}>
                  <span>{el.user}</span>
                  <p>{el.comment}</p>
                  <p className={styles.time}>{el.createdAt}</p>
                </div>
              </div>
              <div className={styles.likeContent}>
                <IoMdHeartEmpty className={styles.icon} />
                <span>{el.countLiked}</span>
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
        <img src={post?.publishedImage} alt="" className={styles.addedImage} />
        <input type="text" placeholder="Написать комментарий..." />
        <MdSend className={styles.sendIcon} />
      </div>
    </div>
  );
};

export default PostComments;
