import { useState, useEffect } from "react";

export function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPosition({ x: e.offsetX, y: e.offsetY });
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);
  return position;
}
