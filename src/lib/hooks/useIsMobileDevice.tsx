import useWindowSize, { displayBackground } from "./useWindowSize";

export default function useIsMobileDevice() {
  const isMobile = displayBackground(useWindowSize()) === "mobile";

  return { isMobile };
}
