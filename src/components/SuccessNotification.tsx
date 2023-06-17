import styles from "./Notifications.module.scss";
export const SuccessNotification = () => {
  return (
    <div className={styles.errorBar}>
      <i
        className="fa-solid fa-circle-exclamation fa-lg"
        style={{ color: "#2bcb20" }}
      ></i>
      <span>Link successfully sent. Check your inbox</span>
      {
        //automatically remove after a while
      }
    </div>
  );
};
