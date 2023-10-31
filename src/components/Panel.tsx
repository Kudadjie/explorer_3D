"use client";
import React, { useState } from "react";
import styles from "./Panel.module.scss";
import { useInteractiveViewerStore } from "@/store/useInteractiveViewerStore";

export default function Panel() {
  const { toggleCurrentPin, PanelContent, panelOpened } =
    useInteractiveViewerStore((state) => ({
      toggleCurrentPin: state.toggleCurrentPin,
      PanelContent: state.currentPin.content,
      panelOpened: state.currentPin.open,
    }));

  const { toggleNotification } = useInteractiveViewerStore((state) => ({
    toggleNotification: state.toggleNotification,
  }));

  const [togglePanelIcon, setTogglePanelIcon] = useState({
    open: false,
    class: "fa-flip-vertical",
  });

  const hasContent = PanelContent ? true : false;

  const Header = () => {
    return (
      <div className={styles.header}>
        <h4>Current View</h4>
        {/* <PanelItemTag /> */}
        <i
          className={
            `fa-solid fa-lg fa-angles-down ` +
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
    const { PanelContent } = useInteractiveViewerStore((state) => ({
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
