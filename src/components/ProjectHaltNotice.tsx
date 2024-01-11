import React from "react";
import styles from "./ProjectHaltNotice.module.scss";

function ProjectHaltNotice() {
  return (
    <div className={styles.container}>
      <i
        className="fa-solid fa-flask-vial fa-2xl"
        style={{ color: "#d5ebff", fontSize: "10em" }}
      ></i>
      <p>Something awesome was supposed to be here...</p>
    </div>
  );
}

export default ProjectHaltNotice;
