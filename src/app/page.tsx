import styles from "./styles.module.scss";
import React from "react";
import Background from "@/components/Background";
import MobileView from "@/components/MobileView";
import LoadingView from "@/components/LoadingView";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      {/* render based on screen size */}
      <div className={styles.container + " " + styles.mobileContainer}>
        <MobileView />
      </div>
      <div
        className={styles.container + " " + styles.desktopAndTabletContainer}
      >
        <LoadingView />
      </div>
    </main>
  );
}
