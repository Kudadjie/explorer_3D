"use client";
import styles from "./styles.module.scss";
import MobileView from "@/components/MobileView";
import MenuBar from "@/components/MenuBar";
import useIsMobileDevice from "@/lib/hooks/useIsMobileDevice";
import Panel from "@/components/Panel";
import Modal from "@/components/Modal";
import Acknowledgement from "@/components/Acknowledgement";
import { useAppStore } from "@/store/useAppStore";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function InteractiveViewer() {
  const { isMobile } = useIsMobileDevice();
  const { modalOpened } = useAppStore((state) => ({
    modalOpened: state.acknowledgementModal.open,
  }));
  const pageContent = (
    <div className={styles.canvasBackdrop + " " + lato.className}>
      {modalOpened && (
        <Modal>
          <Acknowledgement />
        </Modal>
      )}
      <canvas className={styles.canvas} onClick={() => {}}></canvas>
      <MenuBar />
      <Panel />
      {/* <Toolbar /> */}
    </div>
  );
  //render page or invalid screen size page
  return <>{isMobile ? <MobileView /> : pageContent}</>;
}
