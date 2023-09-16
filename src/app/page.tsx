import styles from "./styles.module.scss";
import React from "react";
import LoadingView from "@/components/LoadingView";
import background from "../../public/assets/Hero and Backdrop/home_background.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={background}
        alt=""
        fill={true}
        priority={true}
        style={{ objectFit: "cover" }}
      />
      <div className={styles.container}>
        <LoadingView />
      </div>
    </main>
  );
}
