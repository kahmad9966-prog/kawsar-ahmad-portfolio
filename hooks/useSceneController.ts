"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SCENES, SceneId, LOCKED_SCENES, sceneIndex } from "@/lib/scenes";

export function useSceneController(isAuthenticated: boolean) {
  const [scene, setScene] = useState<SceneId>("hero");
  const [direction, setDirection] = useState<1 | -1>(1);
  const [locked, setLocked] = useState(false);
  const cooldown = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const requestLoginPrompt = useRef<() => void>(() => {});
  const setLoginPromptHandler = useCallback((fn: () => void) => {
    requestLoginPrompt.current = fn;
  }, []);

  const goTo = useCallback(
    (target: SceneId) => {
      if (LOCKED_SCENES.includes(target) && !isAuthenticated) {
        requestLoginPrompt.current();
        return;
      }
      setDirection(sceneIndex(target) > sceneIndex(scene) ? 1 : -1);
      setScene(target);
    },
    [isAuthenticated, scene]
  );

  const step = useCallback(
    (delta: 1 | -1) => {
      if (cooldown.current || locked) return;
      const currentIndex = sceneIndex(scene);
      const nextIndex = currentIndex + delta;

      if (nextIndex < 0 || nextIndex >= SCENES.length) return;

      const target = SCENES[nextIndex];
      if (LOCKED_SCENES.includes(target) && !isAuthenticated) {
        requestLoginPrompt.current();
        return;
      }

      cooldown.current = true;
      setDirection(delta);
      setScene(target);
      setTimeout(() => {
        cooldown.current = false;
      }, 950);
    },
    [scene, isAuthenticated, locked]
  );

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (locked) return;
      if (Math.abs(e.deltaY) < 12) return;
      step(e.deltaY > 0 ? 1 : -1);
    };

    const onKey = (e: KeyboardEvent) => {
      if (locked) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") step(1);
      if (e.key === "ArrowUp" || e.key === "PageUp") step(-1);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null || locked) return;
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      const dx = (touchStartX.current ?? 0) - e.changedTouches[0].clientX;
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 60) {
        step(dy > 0 ? 1 : -1);
      }
      touchStartY.current = null;
      touchStartX.current = null;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [step, locked]);

  return { scene, direction, goTo, setLocked, setLoginPromptHandler };
}
