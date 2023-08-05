import styles from "./Toolbar.module.scss";
import logo from "../../public/assets/logo/logo_dm.svg";
import Image from "next/image";
import ToolbarSubMenu from "./ToolbarSubMenu";
import Hamburger from "./Hamburger";
import { useAppStore } from "@/store/useAppStore";
export default function ToolBar() {
  return (
    <>
      <div className={styles.toolbar}>
        <Image className={styles.logo} src={logo} alt="logo" />
        <Hamburger />
      </div>
    </>
  );
}
