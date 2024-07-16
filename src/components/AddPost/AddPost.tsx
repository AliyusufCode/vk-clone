import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { RiFolderVideoLine } from "react-icons/ri";
import { MdOutlineAudiotrack } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import styles from "./AddPost.module.scss";
const AddPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div className={styles.userContainer}>
          <img src="/image.png" alt="" />
        </div>
        <textarea placeholder="Что у вас нового?" className={styles.input} />
      </div>
      <div className={styles.div}>Видно всем</div>
      <div className={styles.contentIcons}>
        <MdOutlinePhotoSizeSelectActual className={styles.icon} />
        <RiFolderVideoLine className={styles.icon} />
        <MdOutlineAudiotrack className={styles.icon} />
        <GrArticle className={styles.icon} />
      </div>
    </div>
  );
};

export default AddPost;
