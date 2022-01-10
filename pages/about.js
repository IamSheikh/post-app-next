import Head from "next/head";
import Link from "next/link";
import styles from "../styles/About.module.css";

function about() {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <div className={styles.container}>
        <h1>About</h1>
        <Link href="/" passHref>
          <button className={styles.button}>Go back to home</button>
        </Link>
      </div>
    </div>
  );
}

export default about;
