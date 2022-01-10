import Head from "next/head";
import styles from "../styles/CreatePost.module.css";
import Form from "../components/Form";
import { useRouter } from "next/router";

function CreatePost() {
  const router = useRouter();
  const createPost = (post) => {
    fetch("/api/posts/create-post", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        router.push("/posts");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <Head>
        <title>Create Post</title>
      </Head>
      <div className={styles.container}>
        <h1>Create Post</h1>
        <Form handler={createPost} />
      </div>
    </div>
  );
}

export default CreatePost;
