"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo/logo.svg";
import styles from "./LoadingView.module.scss";
import { useRouter } from "next/navigation";

export default function LoadingView() {
  const router = useRouter();

  //wait for nice background to load :)
  setTimeout(() => {
    redirect();
  }, 7000);

  function redirect() {
    router.push("/interactive-viewer");
  }
  return (
    <>
      <Image
        src={logo}
        className={styles.logoTop}
        alt="3d explorer logo"
        priority
      />
      <div>
        <i
          className="fa-solid fa-circle-check"
          style={{ color: "#22e614", marginRight: "10px" }}
        ></i>
        <span className={styles.openingProject}>Opening project...</span>
        <p style={{ fontSize: "smaller" }}>
          <em>This may take awhile depending on your internet speed.</em>
        </p>
      </div>
    </>
  );
}
