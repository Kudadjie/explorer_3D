"use client";
import styles from "./styles.module.scss";
import MenuBar from "@/components/MenuBar";
import Panel from "@/components/Panel";
import { Lato } from "next/font/google";
import GenerateModalsAndNotifications from "@/components/GenerateModalsAndNotifications";
import CanvasSpace from "@/components/CanvasSpace";
// import { useInteractiveViewerStore } from "@/store/useInteractiveViewerStore";
// import { useMediaQuery } from "@react-hook/media-query";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function InteractiveViewer() {
  // const { toggleNotification } = useInteractiveViewerStore((state) => ({
  //   toggleNotification: state.toggleNotification,
  // }));

  // const matches = useMediaQuery("only screen and (max-width: 425px)");

  // (function checkForSuitableScreenSize() {
  //   if (matches) {
  //     toggleNotification(
  //       "Info",
  //       "Your current device screen size is not ideal for viewing the 3D Explorer Project."
  //     );
  //   }
  // })();

  return (
    <div className={styles.canvasBackdrop + " " + lato.className}>
      <GenerateModalsAndNotifications />
      <div className={styles.canvas}>
        <CanvasSpace />
      </div>
      <MenuBar />
      <Panel />
    </div>
  );
}
