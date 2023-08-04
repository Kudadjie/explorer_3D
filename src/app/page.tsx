"use client";
import styles from "./styles.module.scss";
import React from "react";
import Background from "@/components/Background";
import MobileView from "@/components/MobileView";
import LoadingView from "@/components/LoadingView";
import useIsMobileDevice from "@/lib/hooks/useIsMobileDevice";

export default function Home() {
  const { isMobile } = useIsMobileDevice();

  const pageContent = (
    <>
      <Background />
      <div className={styles.container}>
        <LoadingView />
      </div>
    </>
  );

  return (
    //render page or invalid screen size page
    <main className={styles.main}>
      {isMobile ? <MobileView /> : pageContent}
    </main>
  );
}
