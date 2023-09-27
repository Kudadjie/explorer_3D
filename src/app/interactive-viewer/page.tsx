"use client";
import styles from "./styles.module.scss";
import MenuBar from "@/components/MenuBar";
import Panel from "@/components/Panel";
import { Lato } from "next/font/google";
import GenerateModalsAndNotifications from "@/components/GenerateModalsAndNotifications";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function InteractiveViewer() {
  return (
    <div className={styles.canvasBackdrop + " " + lato.className}>
      <GenerateModalsAndNotifications />
      <canvas className={styles.canvas}></canvas>
      <MenuBar />
      <Panel />
    </div>
  );
}
