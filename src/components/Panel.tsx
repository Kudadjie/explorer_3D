"use client";
import React, { useState } from "react";
import styles from "./Panel.module.scss";
import { useAppStore } from "@/store/useAppStore";

export default function Panel() {
  const { toggleCurrentPin, PanelContent, panelOpened } = useAppStore(
    (state) => ({
      toggleCurrentPin: state.toggleCurrentPin,
      PanelContent: state.currentPin.content,
      panelOpened: state.currentPin.open,
    })
  );

  const [togglePanelIcon, setTogglePanelIcon] = useState({
    open: false,
    class: "fa-flip-vertical",
  });

  const hasContent = PanelContent ? true : false;

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
        <h4>Current View</h4>
        {/* <PanelItemTag /> */}
        <i
          className={
            "fa-solid fa-angles-up fa-lg " +
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

  const PanelItem = () => {
    const { PanelContent } = useAppStore((state) => ({
      PanelContent: state.currentPin.content,
    }));
    return (
      <div className={styles.PanelItemContainer}>
        <div className={styles.PanelText}>
          <p>{PanelContent}</p>
        </div>
      </div>
    );
  };
  const PanelView = hasContent ? <PanelItem /> : <EmptyPanel />;

  return (
    <div className={styles.panelContainer}>
      <Header />
      {panelOpened && PanelView}
    </div>
  );
}
