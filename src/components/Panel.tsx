"use client";
import React, { useState } from "react";
import styles from "./Panel.module.scss";
import { useAppStore } from "@/store/useAppStore";
import Draggable from "react-draggable";

//types
type PanelContainerProps = {
  children: React.ReactNode;
};

//components
export default function Panel() {
  const { toggleCurrentPin, PanelContent, panelOpened } = useAppStore(
    (state) => ({
      toggleCurrentPin: state.toggleCurrentPin,
      PanelContent: state.currentPin.content,
      panelOpened: state.currentPin.open,
    })
  );

  const [togglePanelIcon, setTogglePanelIcon] = useState({
    open: true,
    class: "fa-rotate-270",
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
  const PanelContainer: React.FC<PanelContainerProps> = ({ children }) => {
    return (
      <Draggable bounds="parent">
        <div className={styles.panelContainer}>{children}</div>
      </Draggable>
    );
  };
  const PanelItem = () => {
    const { PanelContent } = useAppStore((state) => ({
      PanelContent: state.currentPin.content,
    }));
    return (
      <div
        //Add if more content
        //   style={{ overflowY: "scroll", scrollbarWidth: "thin" }}
        className={styles.PanelItemContainer}
      >
        <div className={styles.PanelText}>
          <p>{PanelContent}</p>
        </div>
      </div>
    );
  };
  const PanelView = hasContent ? <PanelItem /> : <EmptyPanel />;

  return (
    <PanelContainer>
      <Header />
      {panelOpened && PanelView}
    </PanelContainer>
  );
}
