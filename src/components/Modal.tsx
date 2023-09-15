import React from "react";
import styles from "./Modal.module.scss";
type ModalProps = {
  children: React.ReactNode;
};
const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
