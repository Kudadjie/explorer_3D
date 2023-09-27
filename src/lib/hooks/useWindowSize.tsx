"use client";
import { useEffect, useState } from "react";

type windowSizeType = {
  width: number;
  height: number;
};
//listen for resize events and update accordingly
export default function useWindowSize(): windowSizeType {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  // const { setScreen, screen } = useAppStore((state) => ({
  //   setScreen: state.setScreen,
  //   screen: state.screen,
  // }));

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // setScreen(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export function displayBackground(object: windowSizeType) {
  if (object.width) {
    if (object.width >= 1200) {
      return "desktop";
    }
    if (object.width >= 427 && object.width <= 1200) {
      return "tablet";
    }
    if (object.width <= 435 && object.width !== 0) {
      return "mobile";
    }
    //curb initial 0 width
    return "0";
  }
}
