import { useEffect, useState } from "react";

// Define general type for useWindowSize hook, which includes width and height
export interface Size {
  width: number | undefined;
  height: number | undefined;
}
// https://usehooks.com/useWindowSize/
function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
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

export default useWindowSize;
