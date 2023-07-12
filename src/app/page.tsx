import styles from "./styles.module.scss";
import React from "react";
import Image from "next/image";
import warningIcon from "../assets/warning-icon.svg";
import logo from "../assets/logo/logo.svg";
import Background from "@/components/Background";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <div className={styles.container}>
        <Image src={warningIcon} className={styles.warningIcon} alt="#" />
        <Image
          src={logo}
          className={styles.logoTop}
          alt="3d explorer logo"
          priority
        />
        <p className={styles.warningText}>
          The 3D Explorer project is best viewed on a tablet or desktop device.
          Your current screen size is not optimal. Please change devices and try
          again.
        </p>
        <div
          style={{
            width: "100px",
            height: "100px",
            marginTop: "50px",
          }}
        >
          <Loading />
        </div>
        <p style={{ fontWeight: "bolder" }}>Loading - 50%</p>

        <Image
          src={logo}
          className={styles.logoBottom}
          alt="3d explorer logo"
        />
      </div>
    </main>
  );
}
