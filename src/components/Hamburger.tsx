import React from "react";
import { useRef } from "react";

import styles from "./Hamburger.module.scss";
import { useAppStore } from "@/store/useAppStore";
const Hamburger: React.FC = (props) => {
  const { toggleTopMenu } = useAppStore((state) => ({
    toggleTopMenu: state.toggleTopSubmenu,
  }));
  const HamburgerRef = React.useRef<HTMLDivElement | null>(null);

  function toggleClasses() {
    HamburgerRef.current?.classList.toggle(styles.isactive);
  }
  return (
    <div
      className={styles.hamburger}
      ref={HamburgerRef}
      onClick={() => {
        toggleClasses();
        toggleTopMenu();
      }}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Hamburger;
