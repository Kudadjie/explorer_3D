"use client";
import React, { useState, useRef } from "react";
import { Modal } from "./Modal";
import styles from "./CurrentPinPanel.module.scss";
import { useAppStore } from "@/store/useAppStore";
import PanelItem from "./PanelItem";

function CurrentPinPanel() {
  const { toggleCurrentPin, PanelContent, Panel } = useAppStore((state) => ({
    toggleCurrentPin: state.toggleCurrentPin,
    PanelContent: state.currentPin.content,
    Panel: state.currentPin.open,
  }));

  const [togglePanelIcon, setTogglePanelIcon] = useState({
    open: true,
    class: "fa-rotate-270",
  });

  // const PanelItemTag = () => {
  //   return (
  //     <div className={styles.PanelItemTag}>
  //       Pin Name
  //       <i className="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
  //     </div>
  //   );
  // };
  const Header = () => {
    return (
      <div className={styles.header}>
        <i
          className="fa-solid fa-grip-vertical fa-lg"
          style={{ color: "#ffffff" }}
        ></i>
        <h4>Current Pin</h4>
        {/* <PanelItemTag /> */}
        <i
          className={
            "fa-solid fa-angles-right fa-lg fa-rotate-90 " +
            (togglePanelIcon.open && togglePanelIcon.class)
          }
          style={{ color: " #ffffff" }}
          onClick={() => {
            toggleCurrentPin();
            setTogglePanelIcon((state) => {
              return {
                ...state,
                open: state.open ? false : true,
              };
            });
          }}
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
        <p className={styles.emptyPanelSubText}>
          You have not selected any pin points
        </p>
      </div>
    );
  };

  const PanelView = PanelContent ? <PanelItem /> : <EmptyPanel />;

  return (
    <Modal>
      <div className={styles.panelContainer}>
        <Header />
        {Panel && PanelView}
      </div>
    </Modal>
  );
}

export default CurrentPinPanel;
