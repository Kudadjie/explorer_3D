import React from "react";
import styles from "./Modal.module.scss";
type ModalTypes = {
  children: React.ReactNode;
};
export const Modal: React.FC<ModalTypes> = ({ children }) => {
  return (
    <div className={styles.Backdrop}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
};
