"use client";
import styles from "./styles.module.scss";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import warningIcon from "../assets/warning-icon.svg";
import logo from "../assets/logo/logo.svg";
import desktopBackground from "../assets/Hero and Backdrop/hero-desktop.svg";
import { Form } from "@/components/Form";
import { ErrorNotification } from "@/components/ErrorNotification";
import { Modal } from "@/components/Modal";
import { ForgotPasswordForm } from "@/components/ForgotPasswordForm";
import { SuccessNotification } from "@/components/SuccessNotification";
import { useAppStore } from "@/store/useAppStore";

export default function Home() {
  const placeholderBackgroundRef = React.useRef<HTMLDivElement>(null);

  const { forgotPwd } = useAppStore((state) => ({
    forgotPwd: state.forgotPwd,
  }));
  const size = displayBackground(useWindowSize());

  return (
    <main className={styles.main}>
      {/* {show && <ErrorNotification message={"Invalid Email or password"} />} */}
      {/* <SuccessNotification /> */}
      {forgotPwd && (
        <Modal>
          <ForgotPasswordForm />
        </Modal>
      )}
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
        <Form />
        <Image
          src={logo}
          className={styles.logoBottom}
          alt="3d explorer logo"
        />
      </div>
    </main>
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
