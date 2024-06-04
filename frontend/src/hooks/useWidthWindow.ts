import {useEffect, useState} from "react";

function getWidthWindow() {
  if (typeof window !== "undefined") {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
  } else {
    return {width: -1, height: -1};
  }
}

export default function useWidthWindow() {
  const [widthWindow, setWidthWindow] = useState(getWidthWindow);

  useEffect(() => {
    function widthChange() {
      setWidthWindow(getWidthWindow());
    }
    window.addEventListener("resize", widthChange);
    return () => {
      window.removeEventListener("resize", widthChange);
    };
  }, []);

  function between(min: number, max: number) {
    return widthWindow.width > min && widthWindow.width < max;
  }
  const dimensoes = {
    xs: between(0, 640),
    sm: between(640, 768),
    md: between(768, 1024),
    lg: between(1024, 1280),
    xl: between(1280, 1536),
    xl2: between(1536, Number.MAX_VALUE),
  };

  const trueSize = Object.entries(dimensoes).filter((el) => el[1]);

  return trueSize[0]?.[0];
}
