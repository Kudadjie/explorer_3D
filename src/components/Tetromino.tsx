import styles from "./Tetromino.module.scss";
export default function Tetromino() {
  return (
    <div className={styles.tetrominos}>
      <div className={styles.box1}></div>
      <div className={styles.box2}></div>
      <div className={styles.box3}></div>
      <div className={styles.box4}></div>
    </div>
  );
}
