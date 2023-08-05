import React from "react";
import styles from "./ToolbarSubmenu.module.scss";
export default function ToolbarSubMenu() {
  return (
    <div className={styles.toolbarSubmenu}>
      <p className={styles.dropdownMenuOption}>Option</p>
      <hr></hr>
      <p className={styles.dropdownMenuOption}>Option</p>
      <hr></hr>
      <p className={styles.dropdownMenuOption}>Option</p>
      <hr></hr>
      <p className={styles.dropdownMenuOption}>Option</p>
      <hr></hr>
      <p className={styles.dropdownMenuOption}>Option</p>
    </div>
  );
}
