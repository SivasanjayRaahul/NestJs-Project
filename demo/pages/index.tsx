/** @format */


import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.h1}>POSTS</h1>

      <button className={styles.createButton}>Create</button>
      <button className={styles.viewButton}>View</button>
      <button className={styles.updateButton}>Update</button>

    </>
  );
}
