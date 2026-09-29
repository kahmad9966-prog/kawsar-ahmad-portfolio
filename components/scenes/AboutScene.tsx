"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-accent absolute overflow-hidden rounded-3xl"
          style={{ width: 160, height: 160, left: "20%", top: "10%", zIndex: 3 }}
        >
          <Image src="/project1.jpg" alt="Project preview 1" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-accent absolute overflow-hidden rounded-3xl"
          style={{ width: 136, height: 136, left: "42%", top: "28%", zIndex: 2 }}
        >
          <Image src="/project2.jpg" alt="Project preview 2" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-accent absolute overflow-hidden rounded-3xl"
          style={{ width: 112, height: 112, left: "64%", top: "46%", zIndex: 1 }}
        >
          <Image src="/project9.jpg" alt="Project preview 3" fill className="object-cover" />
        </motion.div>
      </div>
    </div>
  );
}
