import styles from "./Notifications.module.scss";
export default function ErrorNotification() {
  return (
    <div className={styles.errorBar}>
      <i
        className="fa-solid fa-circle-exclamation fa-lg"
        style={{ color: "#e51f1f" }}
      ></i>
      <span>An error occured. Please try again.</span>
      {
        //automatically remove after a while
      }
    </div>
  );
}
