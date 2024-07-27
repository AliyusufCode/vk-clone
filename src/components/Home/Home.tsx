import { posts } from "../../assets/Posts/posts";
import AddPost from "../AddPost/AddPost";
import History from "../History/History";
import Posts, { PostsProps } from "../Posts/Posts";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.container}>
      <AddPost />
      <History />
      {posts.map((el: PostsProps) => (
        <Posts
          key={el.id}
          id={el.id}
          groupId={el.groupId}
          image={el.image}
          publishedImage={el.publishedImage}
          publishedName={el.publishedName}
          timePublished={el.timePublished}
          likes={el.likes}
          views={el.views}
          redirected={el.redirected}
          body={el.body}
          commentsCount={el.commentsCount}
          comments={el.comments}
        />
      ))}
    </div>
  );
};

export default Home;
