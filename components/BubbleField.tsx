"use client";

import { useEffect, useRef } from "react";

type Bubble = {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  blur: number;
  popped: boolean;
  popT: number;
};

const SIZE_RANGES = [
  [16, 28], // small
  [32, 52], // medium
  [60, 90], // large
  [100, 150], // extra large
];

let idCounter = 0;

function makeBubble(w: number, h: number, isMobile: boolean): Bubble {
  const tier = SIZE_RANGES[Math.floor(Math.random() * SIZE_RANGES.length)];
  const baseSize = tier[0] + Math.random() * (tier[1] - tier[0]);
  return {
    id: idCounter++,
    x: Math.random() * w,
    y: Math.random() * h,
    size: isMobile ? baseSize * 1.12 : baseSize,
    speedX: (Math.random() - 0.5) * 0.15,
    speedY: -0.06 - Math.random() * 0.14,
    opacity: isMobile ? 0.22 + Math.random() * 0.22 : 0.12 + Math.random() * 0.18,
    blur: Math.random() * 1.5,
    popped: false,
    popT: 0,
  };
}

export default function BubbleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const count = isMobile ? 16 : 26;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    bubblesRef.current = Array.from({ length: count }, () =>
      makeBubble(width, height, isMobile)
    );

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const bubbles = bubblesRef.current;
      const { x: mx, y: my } = mouseRef.current;

      for (const b of bubbles) {
        if (b.popped) {
          b.popT += 0.06;
          if (b.popT >= 1) {
            Object.assign(b, makeBubble(width, height, isMobile), { y: height + 40, id: b.id });
            continue;
          }
          const r = b.size / 2 + b.popT * 26;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(111,214,113,${0.5 * (1 - b.popT)})`;
          ctx.lineWidth = 1.4;
          ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
          ctx.stroke();
          continue;
        }

        b.x += b.speedX;
        b.y += b.speedY;
        if (b.y < -b.size) {
          Object.assign(b, makeBubble(width, height, isMobile), { y: height + b.size });
        }
        if (b.x < -b.size) b.x = width + b.size;
        if (b.x > width + b.size) b.x = -b.size;

        const dx = b.x - mx;
        const dy = b.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < b.size / 2 + 6) {
          b.popped = true;
          b.popT = 0;
          continue;
        }

        const r = b.size / 2;
        const grad = ctx.createRadialGradient(
          b.x - r * 0.3,
          b.y - r * 0.3,
          r * 0.1,
          b.x,
          b.y,
          r
        );
        grad.addColorStop(0, `rgba(255,255,255,${b.opacity * 0.9})`);
        grad.addColorStop(0.6, `rgba(111,214,113,${b.opacity * 0.35})`);
        grad.addColorStop(1, `rgba(72,185,74,${b.opacity * 0.12})`);

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${b.opacity * 0.5})`;
        ctx.lineWidth = 1;
        ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}
