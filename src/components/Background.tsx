"use client";
import React from "react";
import Image from "next/image";
import desktopBackground from "../../public/assets/Hero and Backdrop/hero-desktop.svg";
import styles from "./Background.module.scss";

export default function Background() {
  const placeholderBackgroundRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={styles.background}>
      <Image
        src={desktopBackground}
        alt="#"
        className={styles.backgroundImage}
        priority
        onLoad={() => {
          if (placeholderBackgroundRef.current)
            placeholderBackgroundRef.current.classList.toggle(
              styles.removePlaceholder
            );
        }}
      />
      <div
        ref={placeholderBackgroundRef}
        className={styles.loadingBackground}
      ></div>
    </div>
  );
}
