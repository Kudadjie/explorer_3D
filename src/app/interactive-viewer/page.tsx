"use client";
import styles from "./styles.module.scss";
import MobileView from "@/components/MobileView";
import ToolBar from "@/components/Toolbar";
import ToolbarSubMenu from "@/components/ToolbarSubMenu";
import useIsMobileDevice from "@/lib/hooks/useIsMobileDevice";
import { useAppStore } from "@/store/useAppStore";

export default function InteractiveViewer() {
  const { isMobile } = useIsMobileDevice();
  const { topMenu } = useAppStore((state) => ({
    topMenu: state.toolbarSubmenu.open,
  }));

  const pageContent = (
    <div className={styles.canvasBackdrop}>
      <canvas className={styles.canvas}></canvas>
      <ToolBar />
      <div className={styles.dropDownSpace}>
        {topMenu && <ToolbarSubMenu />}
      </div>
    </div>
  );
  //render page or invalid screen size page
  return <>{isMobile ? <MobileView /> : pageContent}</>;
}
