"use client";
import styles from "./styles.module.scss";
import MobileView from "@/components/MobileView";
import useIsMobileDevice from "@/lib/hooks/useIsMobileDevice";

export default function InteractiveViewer() {
  const { isMobile } = useIsMobileDevice();

  const pageContent = (
    <div className={styles.canvasBackdrop}>
      <canvas className={styles.canvas}></canvas>
      <div className={styles.toolbar}></div>
    </div>
  );
  //render page or invalid screen size page
  return <>{isMobile ? <MobileView /> : pageContent}</>;
}
