"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X } from "lucide-react";
import { skills } from "@/lib/content";

export default function SkillsScene() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const move = (delta: number) => {
    setActive((prev) => Math.max(0, Math.min(skills.length - 1, prev + delta)));
  };

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) < 8 && Math.abs(e.deltaY) < 8) return;
    e.stopPropagation();
    move(e.deltaY > 0 || e.deltaX > 0 ? 1 : -1);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) move(1);
    else if (info.offset.x > 60) move(-1);
  };

  const activeSkill = skills[active];

  return (
    <div className="flex w-full max-w-6xl flex-col items-center">
      <span className="mb-2 text-xs uppercase tracking-[0.25em] text-accent">Skills</span>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
        What I bring to a project
      </h2>

      <div
        className="relative mt-14 h-[280px] w-full max-w-3xl"
        style={{ perspective: 1400 }}
        onWheel={onWheel}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={onDragEnd}
        >
          {skills.map((skill, i) => {
            const offset = i - active;
            const isActive = offset === 0;
            const visible = Math.abs(offset) <= 2;
            if (!visible) return null;

            return (
              <motion.button
                key={skill.id}
                onClick={() => (isActive ? setExpanded(true) : setActive(i))}
                animate={{
                  x: offset * 160,
                  scale: isActive ? 1 : 0.78 - Math.abs(offset) * 0.06,
                  rotateY: offset * -22,
                  opacity: isActive ? 1 : 0.35,
                  filter: isActive ? "blur(0px)" : "blur(1.5px)",
                  zIndex: 10 - Math.abs(offset),
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`cursor-interactive glass absolute flex h-64 w-52 flex-col justify-between rounded-3xl p-6 text-left ${
                  isActive ? "glass-accent shadow-glow-md" : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div>
                  <span className="text-xs font-mono text-accent/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-medium leading-snug text-white">
                    {skill.title}
                  </h3>
                </div>
                <p className="line-clamp-3 text-xs leading-relaxed text-ink-dim">
                  {skill.overview}
                </p>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-10 flex items-center gap-2">
        {skills.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`cursor-interactive h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-accent" : "w-1.5 bg-white/20"
            }`}
            aria-label={`Go to skill ${i + 1}`}
          />
        ))}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-accent relative w-full max-w-lg rounded-3xl p-8"
            >
              <button
                onClick={() => setExpanded(false)}
                className="cursor-interactive absolute right-5 top-5 text-ink-faint hover:text-white"
              >
                <X size={18} />
              </button>
              <h3 className="font-display text-2xl font-semibold text-white">
                {activeSkill.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">{activeSkill.overview}</p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wide text-ink-faint">Experience</span>
                  <p className="mt-1 text-white">{activeSkill.level}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wide text-ink-faint">Projects</span>
                  <p className="mt-1 text-white">{activeSkill.projects}+</p>
                </div>
              </div>

              <div className="mt-6">
                <span className="text-xs uppercase tracking-wide text-ink-faint">Services included</span>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {activeSkill.services.map((s) => (
                    <li key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-dim">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <span className="text-xs uppercase tracking-wide text-ink-faint">Key strengths</span>
                <ul className="mt-2 space-y-1.5">
                  {activeSkill.strengths.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-ink-dim">
                      <span className="h-1 w-1 rounded-full bg-accent" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
