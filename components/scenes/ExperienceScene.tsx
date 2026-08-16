"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/content";

export default function ExperienceScene() {
  return (
    <div className="flex w-full max-w-6xl flex-col items-center">
      <span className="mb-2 text-xs uppercase tracking-[0.25em] text-accent">Experience</span>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
        Where the work has paid off
      </h2>

      <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30, scale: 0.92, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="glass reflection-sweep cursor-interactive rounded-3xl p-6 transition-shadow duration-300 hover:shadow-glow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-medium text-white">{exp.title}</h3>
              <span className="rounded-full border border-accent/25 bg-accent/5 px-2.5 py-0.5 text-[11px] text-accent">
                {exp.years}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-dim">{exp.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
