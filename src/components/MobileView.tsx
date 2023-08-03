import React from "react";
import Image from "next/image";
import warningIcon from "../../public/assets/warning-icon.svg";
import logo from "../../public/assets/logo/logo.svg";
import styles from "./MobileView.module.scss";
import Background from "./Background";
export default function MobileView() {
  return (
    <div className={styles.pageBody}>
      <Background />
      <div className={styles.container}>
        <Image src={warningIcon} className={styles.warningIcon} alt="#" />
        <p className={styles.warningText}>
          The 3D Explorer project is best viewed on a tablet or desktop device.
          Your current screen size is not optimal. Please change devices and try
          again.
        </p>
        <Image
          src={logo}
          className={styles.logoBottom}
          alt="3d explorer logo"
        />
      </div>
    </div>
  );
}
