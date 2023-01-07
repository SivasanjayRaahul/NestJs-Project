/** @format */


import styles from "@/pages/index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className={styles.h1}>POSTS</h1>

      <button className={styles.createButton}>
        <Link href="/posts/create">Create</Link>
      </button>
      <button className={styles.viewButton}>
        <Link href="/posts">View</Link>
      </button>
      <button className={styles.updateButton}>
        <Link href="/posts">Update</Link>
      </button>
    </>
  );
}
