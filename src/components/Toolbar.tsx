"use client";
import React from "react";
import styles from "./Toolbar.module.scss";
import { useAppStore } from "@/store/useAppStore";
import ToggleSwitch from "./ToggleSwitch";
function Toolbar() {
  const { toggleCurrentPin, currentPin } = useAppStore((state) => ({
    toggleCurrentPin: state.toggleCurrentPin,
    currentPin: state.currentPin.open,
  }));
  return (
    <div className={styles.toolbar}>
      <div>
        <i className="fa-solid fa-ruler fa-xl" style={{ color: "#ffffff" }}></i>
      </div>
      <p>Pin View</p>
      <ToggleSwitch
        isToggled={currentPin}
        onToggle={() => {
          toggleCurrentPin();
        }}
      />
    </div>
  );
}

export default Toolbar;
