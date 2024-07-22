import React from "react";
import styles from "./Posts.module.scss";
import { BiComment } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { HiOutlineEye } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
export type Comment = {
  user: string;
  img: string;
  id: number;
  comment: string;
};
export type PostsProps = {
  publishedImage: string;
  publishedName: string;
  timePublished: string;
  body: string;
  groupId: number;
  image: string;
  likes: number;
  commentsCount: number;
  redirected: number;
  views: number;
  id?: number;
  comments?: Comment[];
};
const Posts: React.FC<PostsProps> = ({
  publishedImage,
  publishedName,
  timePublished,
  body,
  image,
  likes,
  commentsCount,
  redirected,
  views,
  groupId,
  comments,
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={`/groups/${groupId}`}>
          <div className={styles.content}>
            <div>
              <img src={publishedImage} alt="" />
            </div>
            <div className={styles.info}>
              <span>{publishedName}</span>
              <p>{timePublished}</p>
            </div>
          </div>
        </Link>
        <HiDotsHorizontal className={styles.icon} />
      </header>
      <div className={styles.body}>
        <p className={styles.title}>{body}</p>
        <img src={image} alt="img" className={styles.img} />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.buttons}>
          <span className={styles.layout}>
            <IoMdHeartEmpty className={styles.icon} />
            <span>{likes}</span>
          </span>
          <span className={styles.layout}>
            <BiComment className={styles.icon} />
            <span>{commentsCount}</span>
          </span>
          <span className={styles.layout}>
            <TiArrowForwardOutline className={styles.icon} />
            <span>{redirected}</span>
          </span>
        </div>
        <div className={styles.view}>
          <HiOutlineEye className={styles.iconView} />
          <span>{views}K</span>
        </div>
        <br />
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.line} />
        {comments?.map((el: Comment) => (
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
      <div className={styles.addComment}>
        <img src={publishedImage} alt="" className={styles.addedImage} />
        <input type="text" placeholder="Написать комментарий..." />
        <MdSend className={styles.sendIcon} />
      </div>
    </div>
  );
};

export default Posts;
