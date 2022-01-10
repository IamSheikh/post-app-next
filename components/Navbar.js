import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links_container}>
        <li className={styles.links}>
          <Link href="/" passHref>
            <button className={styles.link}>Home</button>
          </Link>
          <Link href="/about" passHref>
            <button className={styles.link}>About</button>
          </Link>
          <Link href="/posts" passHref>
            <button className={styles.link}>Posts</button>
          </Link>
          <Link href="/create-post" passHref>
            <button className={styles.link}>Create Post</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
