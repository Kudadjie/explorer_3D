import logo from "../../../public/assets/logo/logo.svg";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function InteractiveViewer() {
  return (
    <div>
      {/* <Loading /> */}
      <Image src={logo} className={styles.logo} alt="3d explorer logo" />
    </div>
  );
}
