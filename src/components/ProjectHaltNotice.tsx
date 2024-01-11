import React from "react";
import styles from "./ProjectHaltNotice.module.scss";
import Image from "next/image";
import image from "../../public/assets/error_2.svg";

function ProjectHaltNotice() {
  return (
    <div className={styles.container}>
      <Image src={image} alt="#" style={{ width: "30vw", height: "30vh" }} />
      <p>Something awesome was supposed to be here...</p>
    </div>
  );
}

export default ProjectHaltNotice;
