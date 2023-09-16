"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo/logo.svg";
import Tetromino from "./Tetromino";
import styles from "./LoadingView.module.scss";
import { useRouter } from "next/navigation";

export default function LoadingView() {
  const [loading, setLoading] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [openingProject, setOpeningProject] = useState(false);

  const router = useRouter();
  //Simulate loading...

  setTimeout(() => {
    setLoading(100);
    triggerLoadingStatusNotification();
  }, 5000);

  function triggerLoadingStatusNotification() {
    setCompleted(true);
    setTimeout(() => {
      setOpeningProject(true);
      // router.push("/interactive-viewer");
    }, 8000);
  }
  return (
    <>
      <Image
        src={logo}
        className={styles.logoTop}
        alt="3d explorer logo"
        priority
      />

      <div className={styles.loadingAnimationBox}>
        <Tetromino />
      </div>
      <div className={styles.loadingStatusSection}>
        <p className={styles.loading} style={{ fontWeight: "bolder" }}>
          Loading - {loading}%
        </p>
        {completed && (
          <p className={styles.completed}>
            Completed{" "}
            <i
              className="fa-solid fa-circle-check"
              style={{ color: "#22e614" }}
            ></i>
          </p>
        )}
        {openingProject && (
          <p className={styles.openingProject}>Opening project...</p>
        )}
      </div>
    </>
  );
}
