import Head from "next/head";
import styles from "../../styles/Posts.module.css";
import Post from "../../components/Post";
import dbConnect from "../../lib/mongo";
import PostModel from "../../schemas/Post";

function index({ posts }) {
  return (
    <div>
      <Head>
        <title>All Posts</title>
      </Head>
      <div className={styles.container}>
        <h1>All Posts</h1>
        {posts.map((post) => (
          <Post
            key={post._id}
            name={post.name}
            title={post.title}
            body={post.body}
            id={post._id}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const result = await PostModel.find({});
  const posts = result.map((doc) => {
    const post = doc.toObject();
    post._id = post._id.toString();
    return post;
  });
  return { props: { posts } };
}

export default index;
