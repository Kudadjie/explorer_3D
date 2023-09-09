"use client";
import styles from "./styles.module.scss";
import MobileView from "@/components/MobileView";
import MenuBar from "@/components/MenuBar";
import useIsMobileDevice from "@/lib/hooks/useIsMobileDevice";
import Toolbar from "@/components/Toolbar";
import { useAppStore } from "@/store/useAppStore";
import CurrentPinPanel from "@/components/CurrentPinPanel";

export default function InteractiveViewer() {
  const { isMobile } = useIsMobileDevice();
  // const { currentPin } = useAppStore((state) => ({
  //   currentPin: state.currentPin.open,
  // }));

  const pageContent = (
    <div className={styles.canvasBackdrop}>
      <canvas className={styles.canvas} onClick={() => {}}></canvas>
      <MenuBar />
      <CurrentPinPanel />
      {/* <Toolbar /> */}
    </div>
  );
  //render page or invalid screen size page
  return <>{isMobile ? <MobileView /> : pageContent}</>;
}
