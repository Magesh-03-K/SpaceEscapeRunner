import { useEffect, useRef } from "react";

export default function useGameLoop(
  update: () => void,
  isRunning: boolean
) {
  const updateRef = useRef(update);

  // Always keep the latest callback
  updateRef.current = update;

  useEffect(() => {
    if (!isRunning) return;

    let frameId: number;

    const loop = () => {
      updateRef.current();
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frameId);
  }, [isRunning]);
}