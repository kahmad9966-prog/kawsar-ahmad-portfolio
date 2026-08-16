"use client";

import { motion } from "framer-motion";
import { owner, aboutParagraphs } from "@/lib/content";

export default function AboutScene() {
  return (
    <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
      {/* Left: storytelling */}
      <div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 block text-xs uppercase tracking-[0.25em] text-accent"
        >
          About
        </motion.span>

        <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {owner.name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.02, duration: 0.5 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>

        <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm text-ink-dim">
          {owner.roles.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            >
              {role}
              {i < owner.roles.length - 1 && <span className="ml-2 text-accent/40">·</span>}
            </motion.span>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {aboutParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.15, duration: 0.55 }}
              className="max-w-md text-sm leading-relaxed text-ink-dim sm:text-base"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Right: visual presentation */}
      <div className="relative flex h-72 items-center justify-center sm:h-96">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-accent absolute animate-float rounded-3xl"
            style={{
              width: 160 - i * 24,
              height: 160 - i * 24,
              left: `${20 + i * 22}%`,
              top: `${10 + i * 18}%`,
              animationDelay: `${i * 0.7}s`,
              zIndex: 3 - i,
            }}
          />
        ))}
        <div className="glass relative z-10 flex h-40 w-40 items-center justify-center rounded-full text-4xl font-display font-semibold text-accent shadow-glow-md sm:h-56 sm:w-56">
          6+
          <span className="absolute bottom-8 text-[10px] font-body font-normal uppercase tracking-widest text-ink-faint">
            years
          </span>
        </div>
      </div>
    </div>
  );
}
