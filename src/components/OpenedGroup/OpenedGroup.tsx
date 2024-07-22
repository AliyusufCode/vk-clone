import { TiArrowForwardOutline } from "react-icons/ti";
import styles from "./OpenedGroup.module.scss";
import { BiComment } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineEye } from "react-icons/hi";
import { useLocation } from "react-router";
import { allGroupList } from "../../assets/Groups/allGroups";
import { posts } from "../../assets/Posts/posts";

export const OpenedGroup = () => {
  const location = useLocation();
  const path = location.pathname;
  const pathElements = path.split("/");
  const lastElement = pathElements[pathElements.length - 1];
  const group = allGroupList.find((el) => el.id.toString() === lastElement);
  const post = posts.filter((el) => el.groupId.toString() === lastElement);
  console.log(post); // Выводим отфильтрованные посты в консоль

  return (
    <div className={styles.container}>
      <div className={styles.bh}>
        <div className={styles.headGroup}>
          <span className={styles.groupName}>
            <img src={group?.img} alt="img" />
            <span>{group?.name}</span>
          </span>
          <span className={styles.infoGroup}>
            <p>✔ Вы подписаны</p> <p>{group?.subscribers} подписчиков</p>
          </span>
        </div>
      </div>
      <div className={styles.countPosts}>
        <span>{post.length} Записей</span>
      </div>
      {post ? (
        post.map((el) => (
          <div className={styles.postsContent}>
            <span className={styles.group}>
              <div className={styles.topGroup}>
                <div style={{ display: "flex" }}>
                  <img src={group?.img} alt="img" />
                  <div className={styles.groupContent}>
                    <span className={styles.groupName}>{group?.name}</span>
                    <span className={styles.time}>{el?.timePublished}</span>
                  </div>
                </div>
                <div>
                  <HiDotsHorizontal className={styles.icon} />
                </div>
              </div>
              <p>{el?.body}</p>
              <img src={el?.image} alt="img" className={styles.postImg} />
            </span>
            <div className={styles.bottomContainer}>
              <div className={styles.buttons}>
                <span className={styles.layout}>
                  <IoMdHeartEmpty className={styles.icon} />
                  <span>{el?.likes}</span>
                </span>
                <span className={styles.layout}>
                  <BiComment className={styles.icon} />
                  <span>{el?.commentsCount}</span>
                </span>
                <span className={styles.layout}>
                  <TiArrowForwardOutline className={styles.icon} />
                  <span>{el?.redirected}</span>
                </span>
              </div>
              <div className={styles.view}>
                <HiOutlineEye className={styles.iconView} />
                <span>{el?.views}K</span>
              </div>
              <br />
            </div>
          </div>
        ))
      ) : (
        <span className={styles.empty}>В этой группе пока нету постов</span>
      )}
    </div>
  );
};
