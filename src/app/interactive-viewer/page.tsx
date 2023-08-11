"use client";
import InfoPanel from "@/components/InfoPanel";
import styles from "./styles.module.scss";
import MobileView from "@/components/MobileView";
import { Modal } from "@/components/Modal";
import ToolBar from "@/components/Toolbar";
import useIsMobileDevice from "@/lib/hooks/useIsMobileDevice";

export default function InteractiveViewer() {
  const { isMobile } = useIsMobileDevice();

  const pageContent = (
    <div className={styles.canvasBackdrop}>
      <canvas className={styles.canvas} onClick={() => {}}></canvas>
      <ToolBar />
      <InfoPanel />
    </div>
  );
  //render page or invalid screen size page
  return <>{isMobile ? <MobileView /> : pageContent}</>;
}
