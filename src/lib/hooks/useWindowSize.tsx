import { useState, useEffect } from "react";

type windowSizeType = {
  width: number;
  height: number;
};
export default function useWindowSize(): windowSizeType {
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

export function displayBackground(object: windowSizeType) {
  //mobile
  if (object.width >= 1200) {
    return "desktop";
  }
  if (object.width >= 427 && object.width <= 1200) {
    return "tablet";
  }
  if (object.width <= 426 && object.width !== 0) {
    return "mobile";
  }
  return "0";
}
