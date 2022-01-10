import Link from "next/link";
import styles from "../styles/Post.module.css";

function Post({ id, title, body, name }) {
  return (
    <Link href={`/posts/${id}`} passHref>
      <div className={styles.card}>
        <h4 className={styles.text_muted}>{name}</h4>
        <h1 className={styles.title}>{title}</h1>
        <p>{body}</p>
      </div>
    </Link>
  );
}

export default Post;
