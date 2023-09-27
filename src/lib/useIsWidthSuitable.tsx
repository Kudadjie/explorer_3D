import useWindowSize from "./hooks/useWindowSize";

export default function useIsWidthSuitable() {
  const window = useWindowSize();
  console.log(window);

  if (window.width) {
    if (window.width < 700) {
      return false;
    }
    return true;
  }
}
