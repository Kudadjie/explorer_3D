import styles from "./Toolbar.module.scss";
import logo from "../../public/assets/logo/logo_dm.svg";
import Image from "next/image";
import ToolbarSubMenu from "./ToolbarSubMenu";
export default function ToolBar() {
  return (
    <>
      <div className={styles.toolbar}>
        <Image className={styles.logo} src={logo} alt="logo" />
        <i
          className={"fa-solid fa-caret-down fa-2xl" + " " + styles.caret}
          style={{ color: "#ffffff" }}
        ></i>
        <ToolbarSubMenu />
      </div>
    </>
  );
}
