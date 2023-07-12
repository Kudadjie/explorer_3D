import styles from "./Notifications.module.scss";
type SuccessNotificationPropTypes = {
  message: string;
};
export const SuccessNotification: React.FC<SuccessNotificationPropTypes> = ({
  message,
}) => {
  return (
    <div className={styles.Bar}>
      <i
        className="fa-solid fa-circle-exclamation fa-lg"
        style={{ color: "#2bcb20" }}
      ></i>
      <span>{message}</span>
      {
        //automatically remove after a while
      }
    </div>
  );
};
