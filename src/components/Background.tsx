"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import desktopBackground from "../../public/assets/Hero and Backdrop/hero-desktop.svg";
import styles from "./Background.module.scss";
import useWindowSize, { displayBackground } from "@/lib/hooks/useWindowSize";

export default function Background() {
  const size = displayBackground(useWindowSize());
  const placeholderBackgroundRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={styles.background}>
      {(size === "desktop" || size === "tablet") && (
        <Image
          src={desktopBackground}
          alt="#"
          className={styles.backgroundImage}
          priority
          onLoad={() => {
            if (!placeholderBackgroundRef.current) return;
            placeholderBackgroundRef.current.className =
              placeholderBackgroundRef.current.className +
              " " +
              styles.removePlaceholder;
          }}
        />
      )}
      <div
        ref={placeholderBackgroundRef}
        className={styles.loadingBackground}
      ></div>
    </div>
  );
}
