"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-white sm:text-5xl">
      {display}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function AchievementsScene() {
  return (
    <div className="flex w-full max-w-6xl flex-col items-center">
      <span className="mb-2 text-xs uppercase tracking-[0.25em] text-accent">Achievements</span>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
        Numbers that reflect the work
      </h2>

      <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="glass flex flex-col items-center rounded-3xl px-4 py-8 text-center shadow-glow-sm"
          >
            <Counter value={a.value} suffix={a.suffix} />
            <span className="mt-3 text-xs leading-snug text-ink-faint">{a.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
