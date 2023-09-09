import React from "react";
import Draggable from "react-draggable";
import styles from "./Modal.module.scss";
type ModalTypes = {
  children: React.ReactNode;
};
export const Modal: React.FC<ModalTypes> = ({ children }) => {
  return (
    <Draggable bounds="parent">
      <div className={styles.Modal}>{children}</div>
    </Draggable>
  );
};
