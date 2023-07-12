"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import desktopBackground from "../assets/Hero and Backdrop/hero-desktop.svg";
import styles from "./Background.module.scss";

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

type windowSizeType = {
  width: number;
  height: number;
};
function useWindowSize(): windowSizeType {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

function displayBackground(object: windowSizeType) {
  //mobile
  if (object.width >= 1200) {
    return "desktop";
  }
  if (object.width >= 426 && object.width <= 1200) {
    return "tablet";
  } else {
    return "mobile";
  }
}
