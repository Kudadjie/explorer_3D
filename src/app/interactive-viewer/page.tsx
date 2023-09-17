"use client";
import styles from "./styles.module.scss";
import MenuBar from "@/components/MenuBar";
import Panel from "@/components/Panel";
import Modal from "@/components/Modal";
import Acknowledgement from "@/components/Acknowledgement";
import { useAppStore } from "@/store/useAppStore";
import { Lato } from "next/font/google";
import Notification from "@/components/Notification";

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
      {/* Info */}
      <Notification
        icon={
          <i
            className="fa-solid fa-circle-info fa-2xl"
            style={{ color: "#2f86eb" }}
          ></i>
        }
        type="Info"
        color="rgb(47 134 235)"
      >
        <p>Test</p>
      </Notification>
      {/* Success */}
      <Notification
        icon={
          <i
            className="fa-solid fa-circle-check fa-2xl"
            style={{ color: "#47d764" }}
          ></i>
        }
        type="Success"
        color="rgb(71 215 100)"
      >
        <p>Test</p>
      </Notification>
      {/* Error */}
      <Notification
        icon={
          <i
            className="fa-solid fa-circle-xmark fa-2xl"
            style={{ color: "#ff355b" }}
          ></i>
        }
        type="Error"
        color="rgb(255 53 91)"
      >
        <p>Test</p>
      </Notification>
      {/* Warning */}
      <Notification
        icon={
          <i
            className="fa-solid fa-circle-exclamation fa-2xl"
            style={{ color: "#ffc021" }}
          ></i>
        }
        type="Warning"
        color="rgb(255 192 33)"
      >
        <p>Test</p>
      </Notification>
    </div>
  );
}
