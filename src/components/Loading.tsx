import styles from "./loading.module.scss";
export default function Loading() {
  return (
    <div className={styles.tetrominos}>
      <div className={styles.box1}></div>
      <div className={styles.box2}></div>
      <div className={styles.box3}></div>
      <div className={styles.box4}></div>
    </div>
  );
}
