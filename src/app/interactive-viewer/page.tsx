import styles from "./styles.module.scss";
import MenuBar from "@/components/MenuBar";
import { Lato } from "next/font/google";
import GenerateModalsAndNotifications from "@/components/GenerateModalsAndNotifications";
import CanvasSpace from "@/components/CanvasSpace";
import ProjectHaltNotice from "@/components/ProjectHaltNotice";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function InteractiveViewer() {
  return (
    <div className={styles.canvasBackdrop + " " + lato.className}>
      <GenerateModalsAndNotifications />
      <div className={styles.canvas}>
        {/* <CanvasSpace /> */ <ProjectHaltNotice />}
      </div>
      <MenuBar />
    </div>
  );
}
