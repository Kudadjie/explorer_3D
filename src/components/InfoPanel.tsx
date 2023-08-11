import React, { useState } from "react";
import { Modal } from "./Modal";
import styles from "./InfoPanel.module.scss";

function InfoPanel() {
  const [hidePanel, setHidePanel] = useState(false);
  const Header = () => {
    return (
      <div
        className={styles.header}
        onClick={() => {
          setHidePanel(true);
        }}
      >
        <h4>Current Pin</h4>
        <i
          className={"fa-solid fa-angles-right fa-lg" + styles.togglePanel}
          style={{ color: " #ffffff" }}
        ></i>
      </div>
    );
  };

  const EmptyPanel = () => {
    return (
      <div className={styles.emptyPanel}>
        <i
          className={"fa-solid fa-triangle-exclamation fa-2xl"}
          style={{ color: "rgb(196 196 196 / 64%)" }}
        ></i>
        <p>Nothing here to see...</p>
      </div>
    );
  };

  return (
    <Modal>
      <div className={styles.panelContainer}>
        <Header />
        <EmptyPanel />
      </div>
    </Modal>
  );
}

export default InfoPanel;
