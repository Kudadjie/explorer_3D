"use client";
import logo from "../../../public/assets/logo/logo.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import MobileView from "@/components/MobileView";
import useIsMobileDevice from "@/lib/hooks/useIsMobileDevice";

export default function InteractiveViewer() {
  const { isMobile } = useIsMobileDevice();

  const pageContent = (
    <div>
      {/* <Loading /> */}
      <Image src={logo} className={styles.logo} alt="3d explorer logo" />
    </div>
  );
  return <>{isMobile ? <MobileView /> : pageContent}</>;
}
