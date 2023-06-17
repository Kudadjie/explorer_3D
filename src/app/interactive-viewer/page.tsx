import Loading from "@/components/Loading";
import logo from "../../assets/logo/logo.svg";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function interactiveViewer() {
  return (
    <div>
      {/* <Loading /> */}
      <Image src={logo} className={styles.logo} alt="3d explorer logo" />
    </div>
  );
}
