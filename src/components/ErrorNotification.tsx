import styles from "./Notifications.module.scss";
import React from "react";
type ErrorNotificationPropTypes = {
  message: any;
};
export const ErrorNotification: React.FC<ErrorNotificationPropTypes> = ({
  message,
}) => {
  return (
    <div className={styles.Bar}>
      <i
        className="fa-solid fa-circle-exclamation fa-lg"
        style={{ color: "#e51f1f" }}
      ></i>
      <span>{message}</span>
    </div>
  );
};
