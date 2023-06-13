"use client"
import styles from "./styles.module.scss"
import { useState, useEffect } from 'react';
import Image from "next/image";
import warningIcon from "../assets/warning-icon.svg"
import logo from "../assets/logo/logo.svg"
import desktopBackground from "../assets/Hero and Backdrop/hero-desktop.svg"
import tabletBackground from "../assets/Hero and Backdrop/hero-tablet.svg"
import mobileBackground from "../assets/Hero and Backdrop/hero-mobile.svg"
import Form from "@/app/interactive-viewer/Form";


export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.background}>
            {(displayBackground(useWindowSize()) === "mobile")  && <Image src={mobileBackground} alt="#" className={styles.backgroundImage} priority/>}
            {(displayBackground(useWindowSize()) === "tablet")  && <Image src={tabletBackground} alt="#" className={styles.backgroundImage} priority/>}
            {(displayBackground(useWindowSize()) === "desktop") && <Image src={desktopBackground} alt="#" className={styles.backgroundImage} priority />}
        </div>
        <div className={styles.container}>
          <Image src={warningIcon} className={styles.warningIcon} alt="#"/>
            <Image src={logo} className={styles.logoTop} alt="3d explorer logo" priority/>
          <p className={styles.warningText}>The 3D Explorer project is best viewed on a tablet or desktop device. Your current screen size is not optimal.
              Please change devices and try again.</p>
            <Form/>
          <Image src={logo} className={styles.logoBottom} alt="3d explorer logo"/>
        </div>
    </main>
  )
}


// Hook
type windowSizeType = {
    width: number,
    height: number
}
function useWindowSize():windowSizeType {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}
function displayBackground(object:windowSizeType){
    //mobile
    if(object.width >= 1200) {
        return "desktop"
    }
    if(object.width >= 426 && object.width <= 1200){
        return "tablet"
    }
    else {
        return "mobile"
    }
}