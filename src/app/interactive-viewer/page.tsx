"use client";
import styles from "./styles.module.scss";
import MenuBar from "@/components/MenuBar";
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
  const { modalOpened } = useAppStore((state) => ({
    modalOpened: state.acknowledgementModal.open,
  }));

  return (
    //TODO - Implement notification for adjusting zoom on device when layout looks off.
    <div className={styles.canvasBackdrop + " " + lato.className}>
      {/* Implement portal? */}
      {modalOpened && (
        <Modal>
          <Acknowledgement />
        </Modal>
      )}
      <canvas className={styles.canvas} onClick={() => {}}></canvas>
      <MenuBar />
      <Panel />
    </div>
  );
}
