"use client";
import styles from "./styles.module.scss";
import MobileView from "@/components/MobileView";
import ToolBar from "@/components/Toolbar";
import useIsMobileDevice from "@/lib/hooks/useIsMobileDevice";

export default function InteractiveViewer() {
  const { isMobile } = useIsMobileDevice();

  const pageContent = (
    <div className={styles.canvasBackdrop}>
      <canvas className={styles.canvas} onClick={() => {}}></canvas>
      <ToolBar />
    </div>
  );
  //render page or invalid screen size page
  return <>{isMobile ? <MobileView /> : pageContent}</>;
}
