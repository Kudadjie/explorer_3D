import styles from "./styles.module.scss";
import React from "react";
import LoadingView from "@/components/LoadingView";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <LoadingView />
      </div>
    </main>
  );
}
