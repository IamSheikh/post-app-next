import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/PostById.module.css";
import dbConnect from "../../lib/mongo";
import Post from "../../schemas/Post";

function PostById({ post, comments }) {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <Head>
        <title>Post {id}</title>
      </Head>
      <div className={styles.container}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  await dbConnect();

  const post = await Post.findById(params.id).lean();
  post._id = post._id.toString();

  return { props: { post }, revalidate: 30 };
}

export async function getStaticPaths() {
  await dbConnect();
  const result = await Post.find({}, { _id: 1 });
  const paths = result.map((post) => ({
    params: { id: post._id.toString() },
  }));
  return { paths, fallback: false };
}

export default PostById;
