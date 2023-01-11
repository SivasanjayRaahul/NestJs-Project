/** @format */

import styles from "@/pages/index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className={styles.h1}>POSTS</h1>

      <Link href="/posts/create" role="button" className={styles.createButton}>
        Create
      </Link>

      <Link href="/posts" role="button" className={styles.viewButton}>
        View
      </Link>
    </>
  );
}
